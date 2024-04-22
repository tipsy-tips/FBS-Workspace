import React from "react";
import { Link } from "react-router-dom";
import { socialIcons, subFooterData } from "./SubFooterData";

const SubFooter = (item, key) => {
  return (
    <div className="container">
      <div class="footer__socials">
        <ul className="flex gap-5 mb-5">
          {socialIcons.map((item, key) => (
            <li key={key}>
              <Link to={`${item.link}`}>
                <img src={item.linkIcon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="space-y-5 font-semibold">
        {subFooterData.map((item, key) => (
          <li key={key}>
            <Link to={`${item.link}`}>{item.linkLabel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubFooter;
