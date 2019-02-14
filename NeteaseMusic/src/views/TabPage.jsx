import React from 'react';
import { NavLink } from 'dva/router';
import './TabPage.scss';
import RouterView from '../router/RouterView';

function TabPage(props) {
  return <div className="container">
    <RouterView routes={props.routes}></RouterView>
    <footer className="footer">
      <NavLink to="/tab/discover">
        <span className="tab_icon icon_discover"></span>
        <span className="tab_text">发现</span>
      </NavLink>
      <NavLink to="/tab/video">
        <span className="tab_icon icon_video"></span>
        <span className="tab_text">视频</span>
      </NavLink>
      <NavLink to="/tab/my">
        <span className="tab_icon icon_mine"></span>
        <span className="tab_text">我的</span>
      </NavLink>
      <NavLink to="/tab/friend">
        <span className="tab_icon icon_friend"></span>
        <span className="tab_text">朋友</span>
      </NavLink>
      <NavLink to="/tab/account">
        <span className="tab_icon icon_account"></span>
        <span className="tab_text">账号</span>
      </NavLink>
    </footer>
  </div>
}

export default TabPage;