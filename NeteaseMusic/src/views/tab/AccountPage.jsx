import React ,{useEffect} from 'react';
import { connect } from 'dva';
import styles from './AccountPage.scss';

function AccountPage(props) {
  console.log(props.account.profile.avatarUrl);
  useEffect(() => {
    props.getUserDetail()
  }, [])

  const {profile,userDetail} =props.account;

  return <div className={styles.account_page}>
    <header className={styles.header}>
      账号
      <span className={styles.header_bo}>
      </span>
    </header>
    <div className={styles.account_info}>
      <div className={styles.user}>
        <span className={styles.avatar_pic}>
          <img src={profile.avatarUrl} alt="" />
        </span>
        <div className={styles.user_info}>
          <h3 className={styles.username}>{profile.nickname}</h3>
          <span className={styles.usergrade}>Lv.{userDetail.level}</span>
        </div>
        <button className={styles.sign}>
          <span className={styles.sign_icon}></span>
          <span className={styles.sign_text}>签到</span>
        </button>
      </div>
      <div className={styles.information}>
        <div className={styles.information_item}>
          <span className={styles.dynamic}>动态</span>
          <span className={styles.dynamic_count}>{profile.authStatus}</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.follows}>关注</span>
          <span className={styles.follows_count}>{profile.follows}</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.fans}>粉丝</span>
          <span className={styles.fans_count}>{profile.followeds}</span>
        </div>
        <div className={styles.information_item}>
          <span className={styles.change_info_icon}></span>
          <span className={styles.my_information}>我的资料</span>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: () => {
      dispatch({
        type: 'account/getUserDetail'
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountPage) ;