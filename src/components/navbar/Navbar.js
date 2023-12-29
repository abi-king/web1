import React from 'react'
import "./Navbar.css"
import img from "../../static/photo_2023-12-28_19-04-46.jpg"
import {NavLink} from "react-router-dom"



function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to={'/'} className="text">
        <img width={50} src={img} alt="" />
        <h3><span>Artificial</span> <br /> Website</h3>
        </NavLink>
        <input type="search" placeholder='Search' />
        <ul className="nav__collection">
            <NavLink to={"/login"} className="nav__item"><button>Sign in</button></NavLink>
        </ul>
    </div>
  )
}

export default Navbar