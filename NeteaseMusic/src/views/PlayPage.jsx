import React, { useState, useEffect } from 'react';
import styles from "./PlayPage.scss";
import { connect } from "dva";
import { Slider, Carousel } from 'antd-mobile';
import { formatTime } from '@/utils/index';
import SongList from "@/components/SongList/SongList";

function PlayPage(props) {
  // console.log('paly_props...', props)
  let [isPlay, setIsPlay] = useState(true);

  let [progress, setProgress] = useState(0);

  let [duration, setDuration] = useState(0);

  let [showSongList, setShowSongList] = useState(false);

  let [showSongLyric, setShowSongLyric] = useState(false);

  let audioEle = React.createRef();

  useEffect(() => {
    props.songDetail({ ids: props.match.params.ids })
  }, [])

  useEffect(() => {
    // console.log(progress, duration);
    if (progress && (progress === duration)) {
      changeSong('next');
      // setIsPlay(false);
    }
  }, [progress]);

  useEffect(() => {
    if (audioEle.current) {
      isPlay ? audioEle.current.play() : audioEle.current.pause();
    }
  }, [isPlay])

  useEffect(() => {
    if (props.song.name) {
      document.title = props.song.name + '|' + props.song.alia[0]
    }
  }, [props.song])


  function play() {
    setIsPlay(!isPlay);
  }

  function timeUpdate() {
    setProgress(audioEle.current.currentTime);
  }

  function loadAudio() {
    setDuration(audioEle.current.duration);
    // audioEle.current.play();
  }

  function progressChange(e) {
    setIsPlay(false);
    setProgress(e);
  }

  function afterChange(e) {
    audioEle.current.currentTime = e;
    setIsPlay(true);
  }

  function changeMode() {
    window._hmt.push(['_trackEvent', '切换模式', 'click', '网易云音乐'])
    props.changeMode({ mode: (props.mode + 1) % 3 })
  }

  function changeShowSongList(bool) {
    setShowSongList(bool)
  }

  function changeSong(type) {
    // console.log('type...', type)
    if (props.mode === 0) {
      audioEle.current.pause();
      audioEle.current.currentTime = 0;
      audioEle.current.play();
    } else {
      props.changeSong(type);
      console.log('change_song...', props.song);
    }
  }

  function showLyric() {
    setShowSongLyric(!showSongLyric)
  }

  function goBack() {
    props.history.go(-1)
  }

  if (!Object.keys(props.song).length) {
    return null;
  }

  return (
    <div className="container">
      <div className={styles.play_page} onClick={showLyric}>
        <header className={styles.play_header} onClick={(e) => e.stopPropagation()}>
          <span className={styles.play_back} onClick={() => goBack()}></span>
          <p className={styles.play_title}>
            <marquee scrollamount="3" behavior="scroll" width="180" className={styles.song_name}>{props.song.name}</marquee>
            <span className={[`${styles.song_author}`, `${styles.song_au}`].join(' ')}>{props.song.ar[0].name}</span>
          </p>
          <span className={styles.play_share}></span>
        </header>
        <div className={styles.play_background} style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></div>
        <div className={styles.play_detail} style={showSongLyric ? { opacity: 0 } : null}>
          <div className={styles.play_album}>
            <p className={isPlay ? null : styles.disable} style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></p>
          </div>
        </div>
        <div className={styles.play_set} onClick={(e) => e.stopPropagation()}>
          <div className={styles.song_operation}>
            <span className={styles.operation_item}></span>
            <span className={styles.operation_item}></span>
            <span className={styles.operation_item}></span>
            <span className={styles.operation_item}></span>
            <span className={styles.operation_item}></span>
          </div>
          {duration ?
            <div className={styles.song_progress}>
              <span className={styles.song_current_time}>{formatTime(progress)}</span>
              <Slider
                style={{ marginLeft: 15, marginRight: 15 }}
                defaultValue={0}
                value={progress}
                min={0}
                max={Math.round(duration)}
                onChange={progressChange}
                onAfterChange={afterChange}
              />
              <span className={styles.song_duration_time}>{formatTime(duration)}</span>
            </div> : null
          }
          <div className={styles.song_set}>
            <span onClick={changeMode} className={props.mode === 0 ? styles.set_cycle_single : props.mode === 1 ? styles.set_cycle_list : styles.set_cycle_random}></span>
            <span className={styles.set_prev} onClick={() => changeSong('prev')}></span>
            <span className={isPlay ? styles.set_play : styles.set_pause} onClick={play}></span>
            <span className={styles.set_next} onClick={() => changeSong('next')}></span>
            <span className={styles.set_songList} onClick={() => setShowSongList(!showSongList)}></span>
          </div>
        </div>
        {/* {
          showSongLyric ? <div className={styles.song_lyric}>
            <div className={styles.lyric_list}>
              <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
              >
                {
                  props.song.lyric.map((item, index) => {
                    return (
                      <p key={index} className={styles.lyric_item}>{item}</p>
                    )
                  })
                }
              </Carousel>
            </div>
          </div> : null
        } */}
        <div className={styles.song_audio}>
          <audio src={props.song.url} ref={audioEle} autoPlay onTimeUpdate={timeUpdate} onCanPlay={loadAudio}></audio>
        </div>
        {
          showSongList ? <SongList changeShowSongList={changeShowSongList} songList={props.songs} current={props.current} /> : null
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state.play
}

const mapDispatchToProps = dispatch => {
  return {
    songDetail: payload => {
      dispatch({
        type: 'play/songDetail',
        payload
      })
    },
    changeMode: payload => {
      dispatch({
        type: 'play/updateState',
        payload
      })
    },
    changeSong: payload => {
      dispatch({
        type: 'play/changeSong',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);


