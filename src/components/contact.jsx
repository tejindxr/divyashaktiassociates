import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          We welcome inquiries related to projects, partnerships, and professional
          collaborations. Reach out to us using the details below.
        </p>

        <div className="contact-details">
          <div>
            <h4>Office Address</h4>
            <p>
              8-A, Pocket-D, Deep Enclave,<br />
              Ashok Vihar Phase-III,<br />
              Delhi – 110052
            </p>
          </div>

          <div>
            <h4>Email</h4>
            <p>divya.shakti0@gmail.com</p>
          </div>

          <div>
            <h4>Office Phone</h4>
            <p>011-43024533</p>
          </div>
        </div>

        <div className="contact-director">
          <h3>Director</h3>
          <p><strong>Amardeep Singh (Jolly)</strong></p>
          <p>📞 +91 97116-11650</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;