import React from 'react'
import "./NavBar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Avatar from '@mui/material/Avatar';
import logo from "../Assets/himonk.svg"


const NavBar = () => {
  return (
    <div className="navbar__container">
        <div className="tabs">
        <div className="logo">
          <img src={logo} alt="" className="main__logo" />
        </div>
            <div className="tab1">Dashboard</div>
            <div className="tab2">
                <div className="text">Content Management</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="tab2">
                <div className="text">Account Management</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="tab2">
                <div className="text">Catalog Management</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="tab2">
                <div className="text">Campain Management</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="tab2">
                <div className="text">Order Management</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="tab2 last">
                <div className="text">Settings</div>
                <div className="icon">
                    <KeyboardArrowDownIcon className='bottomSign'/>
                </div>
            </div>
            <div className="logo">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </div>
        </div>
    </div>
  )
}

export default NavBar