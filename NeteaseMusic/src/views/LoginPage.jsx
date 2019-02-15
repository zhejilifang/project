import React from 'react';
import styles from './LoginPage.scss';

function LoginPage(props) {
  return (
    <div className="container">
      <div className={styles.login_page}>
        <div className={styles.jump}>
          <p className={styles.jump_login}>手机号登录</p>
          <p className={styles.jump_register}>注册</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;