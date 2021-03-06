import React, { useRef } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="contactus_containers" id="contact">
      <h1 className="contact_us_h1">Contact Us</h1>
      <div className="contactus">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactUs;
