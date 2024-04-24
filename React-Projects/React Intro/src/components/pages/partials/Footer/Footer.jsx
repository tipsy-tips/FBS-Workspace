import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "./links";

const Footer = (item, key) => {
  return (
    <footer className="footer mb-10">
      <div className="container">
        <div className="grid grid-cols-5 w-[80%]">
          {footerLinks.map((item, key) => {
            return (
              <div className="footer-link mx-2" key={key}>
                <h3 className="mb-12">{item.title}</h3>
                <ul className="opacity-70 space-y-6">
                  {item.links.map((link, key) => (
                    <li key={key}>
                      <Link to={`${link}`}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <hr className="mt-10 border-t-2" />
      </div>
    </footer>
  );
};

export default Footer;
