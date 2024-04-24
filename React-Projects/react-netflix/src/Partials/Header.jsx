import React from "react";
import { baselmgUrl } from "../Helpers/functions-general";
import { Link } from "react-router-dom";

const Header = ({ isLogin }) => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="flex justify-between items-center">
            <img
              src={`${baselmgUrl}Home/logo.png`}
              alt=""
              className="w-[190px] h-[90px] object-cover"
            />
            {!isLogin && (
              <ul className="flex items-center gap-4">
                <li>
                  <button className="btn">English</button>
                </li>
                <li>
                  <button>
                    <Link to="/login" className="btn btn-accent">
                      Sign Up
                    </Link>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
