import React, { useRef } from "react";
import "./ContactDetails.css";
import { GrMapLocation } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export const ContactDetails = () => {
  const style = { color: "1eb2a6", fontSize: "2em" };
  return (
    <div className="contact_details_container">
      <div className="contact_details_text">
        <h3>Lets Get in touch</h3>
        <p>Were open for any questions or just have a chat </p>
        <div className="contact_text">
          <GrMapLocation style={style} className="contact_icon" />
          <p>Address: 11 Shappad Street,Marilite Building,Mahikeng,2745</p>
        </div>
        <div className="contact_text">
          <BsFillTelephoneFill style={style} className="contact_icon" />
          <p>Phone: 073 224 2420 Or</p>
          <p>078 238 1928</p>
        </div>
        <div className="contact_text">
          <SiMinutemailer style={style} className="about_card_icon" />
          <p>Email:sciecumacademy@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
