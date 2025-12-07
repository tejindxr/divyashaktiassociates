import React from "react";

const Services = () => {
  return (
    <section id="services" className="section gray">
      <h2>Our Services</h2>

      <div className="service-list">

        <div className="service-card">
          <h3>Civil Construction</h3>
          <p>Government projects, private buildings, roads and structural works.</p>
        </div>

        <div className="service-card">
          <h3>Renovation & Repair</h3>
          <p>Complete interior & exterior restoration for residential and commercial areas.</p>
        </div>

        <div className="service-card">
          <h3>Government Tenders</h3>
          <p>Execution of approved tenders, documentation, compliance and reporting.</p>
        </div>

        <div className="service-card">
          <h3>Material Supply</h3>
          <p>High-quality construction materials delivered for medium & large projects.</p>
        </div>

      </div>
    </section>
  );
};

export default Services;