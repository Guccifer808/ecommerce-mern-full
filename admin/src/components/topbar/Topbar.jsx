import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>SHOP.</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>5</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>8</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://avatars.githubusercontent.com/u/36012294?v=4'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}
