import React from 'react';
import './Nav.css';
import { BsArrowUpRightCircle } from "react-icons/bs";



const Nav = () => {
  return (
    <div>
     <div className="navbar"> 
        <div className="logo">KRO</div>
        <div className="navCenter">
          <ul className="navLinks">
            <li>Home</li>
            <li>About US</li>
            <li>Solutions</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className="navRight">
          <div className="button">
            <p>Contact Us</p>
          </div>
          <BsArrowUpRightCircle className="icon" />
        </div>

        </div>
    </div>
  )
}

export default Nav












