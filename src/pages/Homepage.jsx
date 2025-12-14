import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Credentials from "../components/credentials";
import Contact from "../components/contact";
import Footer from "../components/footer";
import DirectorSection from "../components/director";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <DirectorSection/>
      <About />
      <Services />
      <Credentials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;