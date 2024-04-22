import React from "react";
import Header from "../partials/Header";
import Cards from "./Cards";
import { data } from "./data";
import Footer from "../partials/Footer/Footer";
import Sub_Footer from "../partials/Sub-Footer/SubFooter";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {data.map((item, key) => (
          <Cards item={item} key={key} />
        ))}
      </div>
      <Footer />
      <Sub_Footer />
    </div>
  );
};

export default Home;
