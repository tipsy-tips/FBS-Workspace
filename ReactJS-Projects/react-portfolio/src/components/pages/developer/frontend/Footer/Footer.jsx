import React from "react";
import { Helmet } from "react-helmet";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <>
        <div className="bg-cGreen  py-10">
          <div className="container">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
              <div className="footer-block-social relative content-[''] after:h-full after:w-[1px] after:absolute after:bg-white after:top-0 after:right-[-20px]">
                <div className="mb-5">
                  <h2 className="font-bold text-[30px] text-white mb-1">
                    Get in Touch
                  </h2>
                  <h5 className="text-[13px] text-white mb-2">
                    Ready to elevate your digital presence?
                  </h5>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="placeholder:text-xs pl-2 rounded-l-lg text-xs "
                    />
                    <button className="btn--ui px-3 text-xs rounded-r-lg text-white border  border-white hover:font-bold">
                      Submit
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="flex gap-2">
                    <li>
                      <Link to="#">
                        <FaTwitterSquare className="text-3xl text-white hover:scale-125 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaFacebookSquare className="text-3xl text-white hover:scale-125 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitterSquare className="text-3xl text-white hover:scale-125 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaInstagramSquare className="text-3xl text-white hover:scale-125 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaGithubSquare className="text-3xl text-white hover:scale-125 transition-all" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-block ">
                <div>
                  <h4 className="text-[16px] font-bold mb-2 text-white">
                    Important Link
                  </h4>
                  <ul className="text-xs space-y-3 ">
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Projects</Link>
                    </li>
                    <li>
                      <Link to="#">Contacts</Link>
                    </li>
                    <li>
                      <Link to="#">Download Resume</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-block ">
                <div>
                  <h4 className="text-[16px] font-bold mb-2 text-white">
                    Contact Info
                  </h4>
                  <ul className="text-xs space-y-3 ">
                    <li>
                      <Link to="#">+(63) 932 1020 418</Link>
                    </li>
                    <li>
                      <Link to="#">tipsyd.tips@gmail.com</Link>
                    </li>
                    <li>
                      <Link to="#">Laguna, Philippines</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
