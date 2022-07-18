import React, { useRef } from "react";
import "./ContactDetails.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { BiMapPin } from "react-icons/bi";

export const ContactDetails = () => {
  const style = { color: "1eb2a6", fontSize: "2em" };
  return (
    <div className="contact_details_container">
      <div className="contact_details_text">
        <h3 className="contact_text_h3">Lets Get in touch</h3>
        <p className="contact_text_p">
          Were open for any questions or just have a chat{" "}
        </p>
        <div className="contact_text_container">
          <FaMapMarkedAlt style={style} className="contact_icon" />
          <p className="contactus_text">
            Address: 11 Shappad Street,Marilite Building,Mahikeng,2745
          </p>
        </div>
        <div className="contact_text_container">
          <BiMapPin style={style} className="contact_icon" />
          <p className="contactus_text">
            Google Maps: https://goo.gl/maps/1kXdUFSy3m3pZ5ydA
          </p>
        </div>
        <div className="contact_text_container">
          <BsFillTelephoneFill style={style} className="contact_icon" />
          <p className="contactus_text">Phone: 073 224 2420 Or </p>
          <p className="contactus_text"> 078 238 1928</p>
        </div>
        <div className="contact_text_container">
          <SiMinutemailer style={style} className="contact_icon" />
          <p className="contactus_text">Email:sciecumacademy@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
