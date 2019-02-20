import React from 'react';
import { NavLink } from 'dva/router';
import { Icon } from 'antd-mobile';
import styles from './DiscoverPage.scss';
import RouterView from '@/router/RouterView';


function DiscoverPage(props) {

  function goSearch() {
    props.history.push('/search')
  }

  return (
    <div className={styles.discover_page}>
      <header className={styles.header}>
        <span className={styles.header_mai}>
        </span>
        <p className={styles.header_search} onClick={() => goSearch()}>
          <span className={styles.search_model}>
            <Icon type="search" size="xxs" className={styles.search_icon}></Icon>
            <b className={styles.search_placeholder}>猜你喜欢 浮生</b>
          </span>
        </p>
        <span className={styles.header_bo}>
        </span>
      </header>
      <div className="nav_tab">
        <nav className="nav">
          <NavLink to="/tab/discover/recomment"><span>个性推荐</span></NavLink>
          <NavLink to="/tab/discover/radio"><span>主播电台</span></NavLink>
        </nav>
      </div>
      <RouterView routes={props.routes}></RouterView>
    </div>
  );
}

DiscoverPage.propTypes = {
};



export default DiscoverPage;
