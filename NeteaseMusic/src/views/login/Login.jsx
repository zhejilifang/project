import React from 'react';
import styles from "../LoginPage.scss";

function Login(props) {
  return (
    <div className={styles.login}>
      <header className={styles.login_header}>
        <span className={styles.back}></span>
        <span className={styles.login_text}>手机号登录</span>
      </header>
      <div className={styles.login_test}>
        <p className={styles.test_phone}>
          <span className={styles.phone_icon}></span>
          <input type="text" placeholder="手机号" />
        </p>
        <p className={styles.test_passwd}>
          <span className={styles.passwd_icon}></span>
          <input type="password" placeholder="密码" />
        </p>
        <p className={styles.login_btn}>登录</p>
        <p className={styles.reset_passwd}>
          <span>重设密码</span>
        </p>
      </div>
    </div>
  )
}

export default Login;