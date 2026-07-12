import React from "react";

const Credentials = () => {
  return (
    <section id="credentials" className="credentials-section">
      <div className="credentials-container">
        <h2>Our Credentials</h2>
        <p className="credentials-subtitle">
          A legacy built on trust, compliance, and consistent delivery.
        </p>

        <ul className="credentials-list">
          <li>
            <span>✔</span>
            Registered Government Contractor
          </li>
          <li>
            <span>✔</span>
            39+ Years of Industry Experience
          </li>
          <li>
            <span>✔</span>
            250+ Successfully Completed Civil & Renovation Projects
          </li>
          <li>
            <span>✔</span>
            ISO & MSME Registered Organization
          </li>
          <li>
            <span>✔</span>
            Verified PAN, GST & Company CIN
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Credentials;