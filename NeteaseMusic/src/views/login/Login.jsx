import React, { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';
import { connect } from 'dva';
import styles from "../LoginPage.scss";

function Login(props) {

  function goBack() {
    // console.log(props);
    props.history.go(-1)
  }

  let [phone, setPhone] = useState(13523992456);
  let [passwd, setPasswd] = useState('qq465307359...');

  useEffect(() => {
    if (props.status == 'fail') {
      Toast.info('登陆失败!');
    } else if (props.status == 'ok') {
      let redirect = '/tab/discover';
      if (props.location.search) {
        redirect = decodeURIComponent(props.location.search.replace('?redirect=', ''))
      }
      props.history.replace(redirect);
    }
  }, [props.status])

  function submit() {
    if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phone)) {
      Toast.info('请输入正确的手机号码!');
      return false;
    }
    if (!passwd) {
      Toast.info('请输入你的密码!');
      return false;
    }
    props.doLogin({ phone, passwd });
  }

  return (
    <div className={styles.login}>
      <header className={styles.login_header}>
        <span className={styles.back} onClick={() => goBack()}></span>
        <span className={styles.login_text}>手机号登录</span>
      </header>
      <div className={styles.login_test}>
        <p className={styles.test_phone}>
          <span className={styles.phone_icon}></span>
          <input type="text" placeholder="手机号" value={phone} onChange={e => setPhone(e.target.value)} />
        </p>
        <p className={styles.test_passwd}>
          <span className={styles.passwd_icon}></span>
          <input type="password" placeholder="密码" value={passwd} onChange={e => setPasswd(e.target.value)} />
        </p>
        <p className={styles.login_btn} onClick={() => submit()}>登录</p>
        <p className={styles.reset_passwd}>
          <span>重设密码</span>
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    status: state.login.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogin: payload => {
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);