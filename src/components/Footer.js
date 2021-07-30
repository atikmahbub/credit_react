import React from 'react'
import LOGO from '../assets/logo.png'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="menu">
        <FiFacebook cursor="pointer" />
        <FiInstagram cursor="pointer" />
        <FiTwitter cursor="pointer" />
        <FiYoutube cursor="pointer" />
      </div>
    </div>
  )
}

export default Footer
