import React, { useState, useEffect } from 'react';
import styles from "./PlayPage.scss";
import { connect } from "dva";
import { Slider } from 'antd-mobile';

function PlayPage(props) {
  let [isPlay, setIsPlay] = useState(true)

  useEffect(() => {
    props.songDetail({ ids: props.match.params.ids })
  }, [])

  let audioEle = React.createRef();

  useEffect(() => {
    if (props.song.name) {
      document.title = props.song.name + '|' + props.song.alia[0]
    }
  }, [props.song])

  if (!Object.keys(props.song).length) {
    return null;
  }

  function play() {
    // console.log(audioEle.current.play())
    isPlay ? audioEle.current.play() : audioEle.current.pause()
    setIsPlay(!isPlay);
    console.log(isPlay);

  }

  function goBack() {
    props.history.go(-1)
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
            <p style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></p>
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
          <div className={styles.song_progress}>
            <span className={styles.song_current_time}>00:00</span>
            <Slider
              style={{ marginLeft: 15, marginRight: 15 }}
              defaultValue={0}
              min={0}
              max={30}
              onChange={() => { }}
              onAfterChange={() => { }}
            />
            <span className={styles.song_duration_time}>05:13</span>
          </div>
          <div className={styles.song_set}>
            <span className={styles.set_item}></span>
            <span className={styles.set_item}></span>
            <span className={styles.set_item} onClick={play}></span>
            <span className={styles.set_item}></span>
            <span className={styles.set_item}></span>
          </div>
        </div>
        <div className={styles.song_audio}>
          <audio src={props.song.url} ref={audioEle} autoPlay controls ></audio>
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