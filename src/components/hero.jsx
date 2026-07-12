// import React from "react";
// import pic1 from "../images/pic 2.jpeg";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         {/* LEFT SIDE IMAGE */}
//         <div className="hero-image">
//           <img src={pic1} alt="Construction site" />
//         </div>

//         {/* RIGHT SIDE TEXT */}
//         <div className="hero-text">
//           <h1>Divyashakti Associates Pvt. Ltd.</h1>
//           <h2>Building Trust Since 1985</h2>
//           <p>Construction • Renovation • Government Consultancy</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import pic1 from "../images/pic 2.jpeg";
import bg from "../images/bg.jpg";   // ✅ THIS WAS MISSING

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)),
          url(${bg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <div className="hero-image">
          <img src={pic1} alt="Construction site" />
        </div>

        <div className="hero-text">
          <h1>Divyashakti Associates Pvt. Ltd.</h1>
          <h2>Building Trust Since 1985</h2>
          <p>Construction • Renovation • Government Consultancy</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;