import React from 'react';
import { Icon } from "antd-mobile";
import styles from './MenuList.scss';

const MenuList = (props) => {
  console.log('menulist...', props)
  const { menuList } = props;
  const showList = menuList.length ? menuList.slice(0, 6) : []
  return (
    <div className={styles.menu_list}>
      <div className={styles.menu_title}>
        <span>推荐歌单</span>
        <Icon type="right" size="sm" color="#999" />
      </div>
      <div className={styles.menu_cont}>
        {
          showList.length && showList.map((item, index) => {
            return (
              <div className={styles.menu_item} key={index}>
                <div className={styles.item_pic}>
                  <img src={item.picUrl} alt={item.copywriter} />
                </div>
                <p className={styles.item_text}>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

MenuList.propTypes = {
};

export default MenuList;
