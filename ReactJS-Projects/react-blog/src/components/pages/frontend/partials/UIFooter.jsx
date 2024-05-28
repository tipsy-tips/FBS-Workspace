import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const UIFooter = () => {
  return (
    <>
      <footer className="bg-[#152035] pt-16 ">
        <div className="container">
          <div className="flex flex-col gap-5">
            <img
              src="public\images\logo-light.png"
              alt=""
              className="mb-6 max-w-[300px] mx-auto"
            />
            <div className="text-center">
              <h2 className="text-white font-bold mb-1">
                Subscribe Our Newsletter
              </h2>
              <p className="text-white text-[14px] opacity-100 text-balance">
                Be the first to get notified about new posts subscribe our
                newsletter.
              </p>
            </div>
            <form action="">
              <div className="relative max-w-[700px] mx-auto">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your email address"
                  className=" py-5 px-3 w-full bg-primary rounded-lg placeholder:text-sm "
                />
                <button
                  type="submit"
                  className="text-white bg-accent p-3 text-sm rounded-lg absolute top-1/2 -translate-y-1/2 right-3"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <ul className="flex justify-center flex-wrap gap-2 mb-5">
              <li>
                <Link to="#" className="text-white flex gap-1 text-sm ">
                  <FaFacebook className="text-white" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white flex gap-1 text-sm ">
                  <FaTwitter className="text-white" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white flex gap-1 text-sm ">
                  <FaInstagram className="text-white" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white flex gap-1 text-sm">
                  <FaYoutube className="text-white" />
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 mx-6 border-t-[1px] border-gray-500 border-opacity-20 ">
          <p className="text-white text-center opacity-100 text-[12px]">
            © Copyright 2024 Bloge All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default UIFooter;
