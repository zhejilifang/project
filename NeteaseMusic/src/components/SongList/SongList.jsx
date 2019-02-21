import React from 'react';
import styles from './SongList.scss';

const SongList = ({ songList, current, changeShowSongList }) => {
  // console.log('songList....', songList);
  return (
    <div className={styles.song_model} onClick={() => changeShowSongList(false)}>
      <div className={styles.song_container} onClick={e => e.stopPropagation()}>
        <div className={styles.song_list}>
          {
            songList.map((item, index) => {
              let name = item.ar.map(item => item.name).join(' ');
              return <p key={index} className={current === index ? styles.active : ''}>
                <span>{index + 1}</span>
                <span className={styles.song_item_name}>{item.name}</span>
                <span>{name}</span>
              </p>
            })
          }
        </div>
      </div>
    </div>
  );
};

SongList.propTypes = {
};

export default SongList;