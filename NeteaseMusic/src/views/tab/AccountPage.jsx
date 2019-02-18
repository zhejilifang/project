import React from 'react';
import styles from './AccountPage.scss';

function AccountPage(props) {
  return <div className={styles.account_page}>
    <header className={styles.header}>
      账号
      <span className={styles.header_bo}>
      </span>
    </header>
    <div className={styles.account_info}>
      <div className={styles.user}>
        <span className={styles.avatar_pic}>
          <img src="" alt="" />
        </span>
        <div className={styles.user_info}>
          <h3 className={styles.username}>张小宇</h3>
          <span className={styles.usergrade}>Lv.6</span>
        </div>
        <button className={styles.sign}>
          <span className={styles.sign_icon}></span>
          <span className={styles.sign_text}>签到</span>
        </button>
      </div>
      <div className={styles.information}>
        <div className={styles.information_item}>
          <span className={styles.dynamic}>动态</span>
          <span className={styles.dynamic_count}>1</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.follows}>关注</span>
          <span className={styles.follows_count}>3</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.fans}>粉丝</span>
          <span className={styles.fans_count}>1</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.change_info_icon}></span>
          <span className={styles.my_information}>我的资料</span>
        </div>
      </div>
    </div>
  </div>
}

export default AccountPage;