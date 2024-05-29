import React from "react";
import Navigation from "../../partials/Navigation";
import Header from "./partials/Header";
import Main from "./Main";
import Footer from "../../partials/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Navigation />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Home;
