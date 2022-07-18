import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7uga6za",
        "template_6e44aab",
        form.current,
        "XgEuc3iGsW0r77wH7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form_container" ref={form} onSubmit={sendEmail}>
      <div className="form_text">
        <input type="text" name="user_name" placeholder="Name" />
        <input type="text" name="user_surname" placeholder="Surname" />
      </div>
      <div className="form_text">
        <input type="phone" name="user_phone" placeholder="Phone Number" />
        <input type="email" name="user_email" placeholder="Email" />
      </div>

      <div className="form_text">
        <input type="text" name="Subject" placeholder="Subject" />
      </div>
      <div className="form_text_massage">
        <textarea
          className="text_message"
          name="message"
          placeholder="Message"
        />
      </div>

      <input className="submit" type="submit" value="Send" />
    </form>
  );
};
export default ContactForm;
