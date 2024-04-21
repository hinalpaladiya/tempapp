import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [showMediaIcons, setShowMediaIcon] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className="logo">
                    <h2>
                        <span>H</span>inal
                        <span>P</span>aladiya
                    </h2>
                </div>
                <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'} >
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className='social-media-desktop'>
                        <li><a href=""><FaFacebookSquare className='facebook' /></a></li>
                        <li><a href=""><FaInstagramSquare className='instagram' /></a></li>
                        <li><a href=""><FaYoutubeSquare className='youtube' /></a></li>
                    </ul>
                    <div className='hamburger-menu' onClick={() => setShowMediaIcon(!showMediaIcons)} >
                        <a href='#'><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>
            {/* <h1>Thapa Technical</h1> */}
            {/* <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Thapa Technical</h1>
            </section> */}
        </>
    )
}

export default Navbar
