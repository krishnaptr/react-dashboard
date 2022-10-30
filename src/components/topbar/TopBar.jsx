import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Admin Dashboard</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>
                <img src="https://pngimage.net/wp-content/uploads/2018/06/profile-avatar-png-6.png" alt="User Img" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
