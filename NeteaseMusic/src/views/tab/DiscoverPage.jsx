import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Carousel, Icon } from 'antd-mobile';
import styles from './DiscoverPage.scss';

function DiscoverPage(props) {

  useEffect(() => {
    props.getBanner()
  }, [])

  return (
    <div className={styles.discover_page}>
      <header className={styles.header}>
        <span className={styles.header_mai}>
        </span>
        <p className={styles.header_search}>
          <span className={styles.search_model}>
            <Icon type="search" size="xxs" className={styles.search_icon}></Icon>
            <b className={styles.search_placeholder}>猜你喜欢 浮生</b>
          </span>
          <input type="text" />
        </p>
        <span className={styles.header_bo}>
        </span>
      </header>
      <div className={styles.nav_tab}>
        <nav className={styles.nav}>
          <span>个性推荐</span>
          <span>主播电台</span>
        </nav>
      </div>
      <div className={styles.swiper_container}>
        <div className={styles.swiper_background}></div>
        <div className={styles.banner}>
          <Carousel
            autoplay
            infinite
          >{
              props.discover.banner.map((item, index) => {
                return <a key={index} href={item.url ? item.url : 'javascript:void(0)'}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </a>
              })
            }</Carousel>
        </div>
      </div>
      <div className={styles.nav_card}>
        <div className={styles.card_item}>
          <span className={styles.card_item_icon}></span>
          <span className={styles.card_item_text}>私人FM</span>
        </div>
        <div className={styles.card_item}>
          <span className={styles.card_item_icon}></span>
          <span className={styles.card_item_text}>每日推荐</span>
        </div>
        <div className={styles.card_item}>
          <span className={styles.card_item_icon}></span>
          <span className={styles.card_item_text}>歌单</span>
        </div>
        <div className={styles.card_item}>
          <span className={styles.card_item_icon}></span>
          <span className={styles.card_item_text}>排行榜</span>
        </div>
      </div>
    </div>
  );
}

DiscoverPage.propTypes = {
};

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner: () => {
      dispatch({
        type: 'discover/getBanner'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
