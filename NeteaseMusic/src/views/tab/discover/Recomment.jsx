import React, { Fragment, useEffect } from 'react';
import styles from "../DiscoverPage.scss";
import { connect } from "dva";
import { Carousel } from 'antd-mobile';
import MenuList from "@/components/MenuList/MenuList";

function Recomment(props) {

  useEffect(() => {
    props.getBanner();
    props.getPersonalized();
  }, [])

  return (
    <Fragment>
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
      <div className={styles.list}>
        <MenuList menuList={props.discover.personalized} />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner: () => {
      dispatch({
        type: 'discover/getBanner'
      })
    },
    getPersonalized: () => {
      dispatch({
        type: 'discover/getPersonalized'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recomment);