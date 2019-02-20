import React, { useState, useEffect } from 'react';
import styles from "./PlayPage.scss";
import { connect } from "dva";
import { Slider } from 'antd-mobile';
import { formatTime } from '@/utils/index';

function PlayPage(props) {
  let [isPlay, setIsPlay] = useState(true);

  let [progress, setProgress] = useState(0);

  let [duration, setDuration] = useState(0);

  let audioEle = React.createRef();

  useEffect(() => {
    props.songDetail({ ids: props.match.params.ids })
  }, [])

  useEffect(() => {
    console.log(progress, duration);
    if (progress && (Math.ceil(progress) === duration)) {
      setIsPlay(false);
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
    setDuration(Math.ceil(audioEle.current.duration));
  }

  function progressChange(e) {
    setIsPlay(false);
    setProgress(e);
  }

  function afterChange(e) {
    audioEle.current.currentTime = e;
    setIsPlay(true);
  }

  function goBack() {
    props.history.go(-1)
  }

  if (!Object.keys(props.song).length) {
    return null;
  }

  return (
    <div className="container">
      <div className={styles.play_page}>
        <header className={styles.play_header}>
          <span className={styles.play_back} onClick={() => goBack()}></span>
          <p className={styles.play_title}>
            <span className={styles.song_name}>{props.song.alia[0]}</span>
            <span className={styles.song_author}>{props.song.ar[0].name}</span>
          </p>
          <span className={styles.play_share}></span>
        </header>
        <div className={styles.play_background} style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></div>
        <div className={styles.play_detail}>
          <div className={styles.play_album}>
            <p className={isPlay ? null : styles.disable} style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></p>
          </div>
        </div>
        <div className={styles.play_set}>
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
                min={0}
                max={duration}
                onChange={progressChange}
                onAfterChange={afterChange}
              />
              <span className={styles.song_duration_time}>{formatTime(duration)}</span>
            </div> : null
          }
          <div className={styles.song_set}>
            <span className={styles.set_item}></span>
            <span className={styles.set_item}></span>
            <span className={isPlay ? styles.set_play : styles.set_pause} onClick={play}></span>
            <span className={styles.set_item}></span>
            <span className={styles.set_item}></span>
          </div>
        </div>
        <div className={styles.song_audio}>
          <audio src={props.song.url} ref={audioEle} autoPlay onTimeUpdate={timeUpdate} onCanPlay={loadAudio}></audio>
        </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);