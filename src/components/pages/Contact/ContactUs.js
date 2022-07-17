import React, { useRef } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contactus">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactUs;
