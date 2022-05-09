import React from 'react'
import "./Header.scss"

import logo from "../Assets/download.png"

const Header = () => {
  return (
    <div className="header__container">
        <div className="logo">
          <img src={logo} alt="" className="main__logo" />
        </div>
        <div className="admin__name">Merhaba, <span>Admin Admin</span></div>
    </div>
  )
}

export default Header