import React from "react";
import { PiCaretDown, PiCaretDownFill, PiTranslate } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer border-t-[10px] border-[#232323] bg-black py-20 text-white">
        <div className="container">
          <p className="mb-5 underline opacity-70">Questions? Contact us.</p>
          <div className="footer-links grid grid-cols-4 gap-5">
            <div className="footer-link underline opacity-70 mb-5">
              <ul className="space-y-3 text-xs">
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Investor Relations</Link>
                </li>
                <li>
                  <Link>Ways to Watch</Link>
                </li>
                <li>
                  <Link>Corporate Information</Link>
                </li>
                <li>
                  <Link>Only on Netflix</Link>
                </li>
              </ul>
            </div>
            <div className="footer-link underline opacity-70 mb-5">
              <ul className="space-y-3 text-xs">
                <li>
                  <Link>Help Center</Link>
                </li>
                <li>
                  <Link>Jobs</Link>
                </li>
                <li>
                  <Link>Terms of Use</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-link underline opacity-70 mb-5">
              <ul className="space-y-3 text-xs">
                <li>
                  <Link>Account</Link>
                </li>
                <li>
                  <Link>Redeem Gift Cards</Link>
                </li>
                <li>
                  <Link>Privacy</Link>
                </li>
                <li>
                  <Link>Speed Test</Link>
                </li>
              </ul>
            </div>
            <div className="footer-link underline opacity-70 mb-5">
              <ul className="space-y-3 text-xs">
                <li>
                  <Link>Media Center</Link>
                </li>
                <li>
                  <Link>Buy Gift Cards</Link>
                </li>
                <li>
                  <Link>Cookie Preferences</Link>
                </li>
                <li>
                  <Link>Legal Notices</Link>
                </li>
              </ul>
            </div>
          </div>
          <button className="py-1 px-3 border-[1px] border-stone-600 rounded-md bg-[#0f0f0f] flex gap-2 items-center mb-5">
            {" "}
            <PiTranslate />
            English <PiCaretDownFill className="text-xs" />
          </button>
          <p className="opacity-75 text-xs">Netflix Philippines</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
