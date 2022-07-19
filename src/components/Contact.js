import React, { useRef } from 'react';
import "../styles/contact.css";
import emailjs from '@emailjs/browser';
import Map from "./Map";


// googlemapsapikey - AIzaSyBhPNKX3emlNceAjlPijtJEbdXGqk_vE8E
/*
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);

  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ewqjuj', 'template_n9um3oh', form.current, '2Xl4dK5gYnRNzmpi_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  render() {
    return (
      <div id="contact">
        <div className="section-header">
          <span>Contact</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Contact;
*/

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ewqjuj', 'template_n9um3oh', form.current, '2Xl4dK5gYnRNzmpi_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };

  return (
    <div id="contact">
      <div className="section-header">
        <span>Contact</span>
      </div>
      <div className="cfirstHalf">
        <div className="intro2">
          I’m interested in all job opportunities – especially ambitious or complex jobs.
          However, if you have other request or question, don’t hesitate to contact me.
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="firstLine">
            <input type="text" name="user_name" placeholder='Name' className="name" />
            <input type="email" name="user_email" placeholder="Email" className="email" />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="subject" />
          <textarea name="message" placeholder='Message' className="message" />
          <div className="subcontainer">
            <input type="submit" value="Send!" className="submit" />
          </div>
        </form>
      </div>
      <div className="csecondHalf">
        <Map></Map>
      </div>

    </div>
  );
};
export default Contact;