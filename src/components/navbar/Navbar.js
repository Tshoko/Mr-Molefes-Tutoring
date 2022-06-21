import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-scroll";
import './Navbar.css';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const style = { color: "1eb2a6", fontSize: "1em" ,padding:"1rem"}
    return (
        <div className='header' id="header">
            <nav className='navbar'>
                <h1 class="name">Molefes Extra Classes</h1>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <li className={click ? "nav-menu active" : "nav-menu"}>
                    <Link activeClass="active" style={style} to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                    <Link activeClass="active" style={style} to="about" spy={true} smooth={true} offset={-90} duration={500}onClick={closeMenu}>About</Link>
                    <Link activeClass="active" style={style} to="classes" spy={true} smooth={true} offset={0} duration={500}onClick={closeMenu}>Classes</Link>
                    <Link activeClass="active" style={style} to="team" spy={true} smooth={true} offset={0} duration={500}onClick={closeMenu}>Team</Link>
                    <Link activeClass="active" style={style} to="testimonials" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Testimonials</Link>
                    <Link activeClass="active" style={style} to="about" spy={true} smooth={true} offset={50} duration={500}onClick={closeMenu}>Contact Us</Link>

                </li>
            </nav>
        </div>
    )
}

export default Navbar
