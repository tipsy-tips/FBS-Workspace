import React from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Counter />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
