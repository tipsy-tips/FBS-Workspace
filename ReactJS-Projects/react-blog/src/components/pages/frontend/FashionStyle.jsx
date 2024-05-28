import React from "react";
import Card from "./partials/Card";
import SectionTitle from "./partials/SectionTitle";

const FashionStyle = () => {
  return (
    <section className="fashion bg-[#f9f9ff] py-10">
      <div className="container">
        <SectionTitle title="Fashion & Style" hasLink="true" />
        <div className="grid gap-14 md:grid-cols-3">
          <Card height="sm" />
          <Card height="sm" />
          <Card height="sm" />
          <Card height="sm" />
          <Card height="sm" />
          <Card height="sm" />
        </div>
      </div>
    </section>
  );
};

export default FashionStyle;
