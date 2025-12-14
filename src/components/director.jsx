import React from "react";
import directorPic from "../images/pic1.jpeg";
import directorBG from "../images/directorBG.jpg";

const Director = () => {
  return (
    <section
      className="director-section"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)),
          url(${directorBG})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="director-content">
        <div className="director-text">
          <h2>Director</h2>
          <h3>Amardeep Singh</h3>
          <p>
            “Leadership is not about authority, it is about responsibility —
            to build with integrity, vision, and long-term trust.”
          </p>
        </div>

        <div className="director-image">
          <img src={directorPic} alt="Amardeep Singh with Ram Nath Kovind" />
          <span className="caption">
            Mr. Amardeep Singh with Former President of India, Shri Ram Nath Kovind
          </span>
        </div>
      </div>
    </section>
  );
};

export default Director;