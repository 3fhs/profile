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
    <section className="sectionx" id="contact">
      <Title title="Contact"/>
      <div className="contact-me" >
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="your input-text"
            placeholder="what is your name ?"
            name="your-name"
          />
          <input
            type="email"
            className="email input-text"
            placeholder="can you write email"
            name="your-email"
          />
          <textarea
            className="msg input-text"
            name="message"
            rows={5}
            placeholder="your message"
            style={{ resize: "none", height: "200px" }}
          ></textarea>
          <button type="submit" value="send" className="submit">
            submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
