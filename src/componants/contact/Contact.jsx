import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import "../Skills/Skills.css";
import emailjs from "@emailjs/browser";
import Title from "../title-head/Title";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current["your-name"].value;
    const email = form.current["your-email"].value;
    const message = form.current["message"].value;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_l7uzphh", "template_ssvp6ku", form.current, {
        publicKey: "Hq5usaIxsHgmcterJ",
      })
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section className="sectionx back-contact" id="contact">
      <div className="intro-conainer">
        <Title title="Contact"/>
        <div className="contact-me" >
          <div className="contact-text">
            <span><i className="bi bi-asterisk"></i>You can reach out to me by entering your name and email address, </span>
            <span><i className="bi bi-asterisk"></i>Then clicking the 'Send' button. </span>
            <span><i className="bi bi-asterisk"></i>I will get back to you as soon as possible. </span>
            <div className="best"> Best regards, </div>
            <div className="name"> Mr. Mohamed Abdelghany. </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="your input-text"
              placeholder="Write Your Name ..."
              name="your-name"
            />
            <input
              type="email"
              className="email input-text"
              placeholder="Write Your Email ..."
              name="your-email"
            />
            <textarea
              className="msg input-text"
              name="message"
              rows={5}
              placeholder="Write Your Message ..."
              style={{ resize: "none", height: "200px", color:'#000' }}
            ></textarea>
            <button type="submit" value="send" className="submit">
              submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
