import React from 'react'
import "./Header.scss"
import NavBar from './NavBar/NavBar'

const Header = () => {
  return (
    <header>
      <NavBar/>
      <h1>
        Trendy <br /> Fashion
      </h1>
      <svg width="70" height="70" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 45C7.5 65.7107 24.2893 82.5 45 82.5C65.7107 82.5 82.5 65.7107 82.5 45C82.5 24.2893 65.7107 7.5 45 7.5C24.2893 7.5 7.5 24.2893 7.5 45Z" stroke="white" stroke-width="2"/>
        <path d="M60 39.375L45 54.375L30 39.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </header>
  )
}

export default Header