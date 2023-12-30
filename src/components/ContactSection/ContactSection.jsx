import React from "react";
import "./ContactSection.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-section" id="contact">
      <div className="background-title-contact">CONTACT</div>

      <div className="form-container">
        <video autoPlay loop muted className="contact-form-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="form-overlay">
         <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
