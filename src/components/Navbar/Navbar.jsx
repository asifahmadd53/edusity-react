import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {


  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = ()=>{

      mobileMenu ? setMobileMenu (false) : setMobileMenu(true)

  }

  return (
   <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={mobileMenu ? '' : 'hide-menu'}>
        <li><Link to='home' smooth={true}offset={0} duration>Home</Link></li>
        <li><Link to='program' smooth={true}offset={-260} duration>Program</Link></li>
        <li><Link to='about' smooth={true}offset={-150} duration>About Us</Link></li>
        <li><Link to='campus' smooth={true}offset={-260} duration>Campus</Link></li>
        <li><Link to='testimonials' smooth={true}offset={-260} duration>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration>Contact Us</Link></button></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar
