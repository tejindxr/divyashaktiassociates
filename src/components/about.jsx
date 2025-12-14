import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Divyashakti Associates</h2>

      <div className="about-cards">
        <div className="about-card">
          <h3>Established Legacy</h3>
          <p>
            Founded in <strong>1985</strong>, Divyashakti Associates Pvt. Ltd. has
            built a strong reputation in construction and infrastructure
            development through decades of consistent performance and trust.
          </p>
        </div>

        <div className="about-card">
          <h3>Execution Excellence</h3>
          <p>
            We specialize in civil construction, renovation, infrastructure
            works, and government contracting, delivering projects with a strong
            focus on quality, safety, and timely completion.
          </p>
        </div>

        <div className="about-card">
          <h3>Trusted Partnerships</h3>
          <p>
            Our long-standing relationships with government bodies, consultants,
            and private stakeholders reflect our commitment to transparency,
            compliance, and long-term collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;