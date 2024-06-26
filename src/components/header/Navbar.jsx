import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
    document.body.classList.add('scroll')
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove('scroll')
  }
  return (
    <nav className='nav'>
      <div className={isOpen ? "nav-bg show" : "nav-bg"} onClick={closeMenu}></div>
      <div className="container">
        <div className="nav-content">
          <a href='/' className="nav-logo">
            <img src={logo} className='nav-logo_img' alt="" />
          </a>

          <ul className={isOpen ? "nav-links show" : "nav-links"}>
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Course</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>

            <button className="nav-close_btn" onClick={closeMenu}>
              <IoClose />
            </button>
          </ul>

          <div className="nav-items">
            <a href="#" className='nav-backet_link'>
              <FaShoppingCart />
              <span className="nav-course">
                Courses
              </span>
            </a>
            <button className="nav-btn">
              Start now
            </button>

            <button className="nav-menu_btn" onClick={openMenu}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar