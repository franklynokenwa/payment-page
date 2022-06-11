import React from 'react'
import HeaderStyle from '../styles/Header.module.css'
import userImage from '../images/userImage.PNG'

const Header = () => {
  return (
    <header>
        <div className={HeaderStyle.header_links}>
            <p><a href="#">TRIPS</a></p>
            <p><a href="#">RECENTLY VIEWED</a></p>
            <p><a href="#">BOOKINGS</a></p>
        </div>
        <img src={userImage} alt="user"/>
    </header>
  )
}

export default Header