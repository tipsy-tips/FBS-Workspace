import React from "react";
import Header from "../../Partials/Header";
import Footer from "../../Partials/Footer";
import { PiCaretRight } from "react-icons/pi";
import Features from "./Features";
import { faq, feature } from "./data";
import { FaTimes } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Accordion from "./Accordion";
import FormSubscribe from "./FormSubscribe";

const Home = () => {
  return (
    <div>
      <div className="banner bg-[url('/public/images/home/banner-bg.jpeg')] h-[70vh] w-full bg-cover isolate relative">
        <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
        <Header isLogin={false} />
        <div className="container">
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl mb-10">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mb-6">Watch anywhere. Cancel anytime.</p>
            <p className="mb-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form action="" className="flex gap-3 items-center justify-center">
              <div className="input__wrapper mb-0 flex-none w-[400px] ">
                <input type="text" name="email" required />
                <label htmlFor="email">Email Adress</label>
              </div>
              <button className="rounded-md bg-accent p-4 text-xl flex gap-3 items-center">
                Get Started <PiCaretRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="feature-list">
        {feature.map((item, key) => (
          <Features item={item} key={key} />
        ))}
      </div>

      <div className="faqs border-b-[10px] border-t-[10px] border-[#232323] bg-black py-20 text-white">
        <h2 className="text-5xl text-center text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="faq-list mb-10">
          {faq.map((item, key) => (
            <Accordion item={item} key={key} />
          ))}
        </div>
        <p className="text-center text-white mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <FormSubscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
