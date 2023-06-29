import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { AiFillGithub } from "react-icons/ai";
import { BsSendCheckFill } from "react-icons/bs";
import { SiCodepen, SiTwitter, SiInstagram } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout title={"Contact Us | SmartCart"}>
      <section id="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          <form
            id="contact-form"
            className="form-horizontal"
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"> <BsSendCheckFill/></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">Queens, New York</span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                    (555) 123-4567
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      aryan.sharma1772002@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <SiCodepen />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <SiTwitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <SiInstagram />
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">
              &copy; ALL OF THE RIGHTS RESERVED
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
