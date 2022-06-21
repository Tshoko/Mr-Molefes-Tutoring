import React from "react";
import "./Footer.css";
import {Link} from "react-scroll";
import { BiCopyright  } from "react-icons/bi";
const Footer = () => {
  const style = { color: "1eb2a6", fontSize: "1em" }
  return(
        <footer className="footer">
          <h1>Molefes Tutoring Services</h1>
          <div className="footer_container">
              <div className="footer_content">
                  <h3 className="footer_content_header"> About Us</h3>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Offers</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Team</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link>              </div>
              <div className="footer_content">
                  <h3 className="footer_content_header">Schedules and Pricing</h3>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Extra Classes</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Matric Upgrading</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Online Help Sessions</Link>
              </div>
              <div className="footer_content">
                  <h3 className="footer_content_header">Social Media</h3>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Facebook</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Twitter</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>YouTube</Link>
                  <Link className='footer_link' to="about" spy={true} smooth={true} offset={50} duration={500}>Instagram</Link>
              </div>
          </div>
          <div className="footer-copyright">
                  <BiCopyright style={style} className="footer-icon"/>
                  <p>  2022 Copyright: Molefe.com. All Rights Reserved.</p>
              </div>
        </footer>
   )
};

export default Footer;