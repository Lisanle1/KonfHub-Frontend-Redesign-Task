import React from 'react'
import './Header.css'
function Header({eventData}) {
  return (
    <div className="header-align">
              <img src={eventData.navbar_icon} alt="KonfHub Logo" height={50}/>
              <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/user--v1.png" alt="user--v1"/>    
              </div>
  )
}

export default Header