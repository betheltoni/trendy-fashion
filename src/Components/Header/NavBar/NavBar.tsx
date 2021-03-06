import React, { useState } from 'react'
import "./NavBar.scss"

const NavBar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
        <nav>
          <span className='Logo'>
              Denrele <br /> Paul
          </span>

          <div className='MenuBtn'>
            <svg width="35" height="11" viewBox="0 0 35 11" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={()=>{setShowSideNav(!showSideNav)}}>
            <line x1="0.5" y1="0.5" x2="34.5" y2="0.5" stroke="white" stroke-linecap="round"/>
            <line x1="0.5" y1="10.5" x2="34.5" y2="10.5" stroke="white" stroke-linecap="round"/>
            </svg>

            <div className={showSideNav ? "SideNav" : "Closed"}>
              <ul>
                <li><span>Home</span></li>
                <li><span>About Us</span></li>
                <li><span>Projects</span></li>
                <li><span>Contact Me</span></li>
              </ul>
            </div>
          </div>

          
          <span className='NavLink'>Home</span>
          <span className='NavLink'>About Us</span>
          <span className='NavLink'>Projects</span>
          <span className='NavLink'>Contact Me</span>
        
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='Arrow'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.608 1.07277C10.608 0.962823 10.5643 0.857376 10.4866 0.779628C10.4088 0.701881 10.3034 0.658203 10.1934 0.658203H5.21859C5.10863 0.658203 5.00319 0.701881 4.92544 0.779628C4.84769 0.857376 4.80401 0.962823 4.80401 1.07277C4.80401 1.18273 4.84769 1.28817 4.92544 1.36592C5.00319 1.44367 5.10863 1.48735 5.21859 1.48735H9.19267L0.779354 9.89983C0.740809 9.93838 0.710234 9.98414 0.689373 10.0345C0.668513 10.0849 0.657776 10.1388 0.657776 10.1933C0.657776 10.2479 0.668513 10.3018 0.689373 10.3522C0.710234 10.4026 0.740809 10.4483 0.779354 10.4869C0.8179 10.5254 0.863659 10.556 0.914021 10.5768C0.964383 10.5977 1.01836 10.6084 1.07287 10.6084C1.12738 10.6084 1.18136 10.5977 1.23172 10.5768C1.28208 10.556 1.32784 10.5254 1.36639 10.4869L9.77887 2.07355V6.04763C9.77887 6.15758 9.82255 6.26303 9.9003 6.34078C9.97804 6.41853 10.0835 6.4622 10.1934 6.4622C10.3034 6.4622 10.4088 6.41853 10.4866 6.34078C10.5643 6.26303 10.608 6.15758 10.608 6.04763V1.07277Z" fill="white"/>
          </svg>
        </nav>
  )
}

export default NavBar