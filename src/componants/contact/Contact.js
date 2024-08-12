// import React, { useRef } from "react";
// import "./Contact.css";
// import "../Skills/Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_l7uzphh", "template_ssvp6ku", form.current, {
//         publicKey: "Hq5usaIxsHgmcterJ",
//       })
//       .then((result) => {
//         console.log(result.txt);
//       });
//   };

//   return (
//     <section className="contact-cont">
//       <div className="head-section">
//         <h2>my contact</h2>
//         <p>
//           You can write to me from here and I will receive your message in my
//           email or contact me through one of the links below. Thank you
//         </p>
//       </div>
//       <div id="contact">
//         <form className="contact-form" ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             className="your input-text"
//             placeholder="what is your name ?"
//             name="your-name"
//           />
//           <input
//             type="email"
//             className="email input-text"
//             placeholder="can you write email"
//             name="your-email"
//           />
//           <textarea
//             className="msg input-text"
//             name="message"
//             rows={5}
//             placeholder="your message"
//           ></textarea>
//           <button type="submit" value="send" className="submit">
//             submit
//           </button>
//         </form>
//         <div className="icons">
//           <a href="https://www.facebook.com/profile.php?id=100047980277283">
//             <FontAwesomeIcon icon={faFacebook} className="icon" />
//           </a>
//           <a href="https://www.linkedin.com/in/mohamed-abdelghany-b6b74a281">
//             {" "}
//             <FontAwesomeIcon icon={faLinkedin} className="icon" />{" "}
//           </a>
//           <a href="https://github.com/3fhs">
//             <FontAwesomeIcon icon={faGithub} className="icon" />
//           </a>
//           <a href="https://www.Abdelghany654@gmail.com">
//             <FontAwesomeIcon icon={faEnvelope} className="icon" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import "../Skills/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";

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
    <section className="contact-cont">
      <div className="head-section">
        <h2>contact</h2>
        <p>
          You can write to me from here and I will receive your message in my
          email or contact me through one of the links below. Thank you
        </p>
      </div>
      <div id="contact">
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
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100047980277283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-abd-elghany-b6b74a281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/3fhs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="abdelghany654@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
