import React from 'react';
import styles from './LoginPage.scss';
import RouterView from '@/router/RouterView';

function LoginPage(props) {
  function jumpPage(address) {
    console.log(1);
    props.history.push(address)
  }

  return (
    <div className="container">
      <div className={styles.login_page}>
        <RouterView routes={props.routes}></RouterView>
        <div className={styles.jump}>
          <p className={styles.jump_login} onClick={() => jumpPage('/login/login')}>手机号登录</p>
          <p className={styles.jump_register} onClick={() => jumpPage('/login/register')}>注册</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;