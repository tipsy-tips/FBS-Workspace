import React from "react";
import { Link } from "react-router-dom";
import Logo from "./svg/Logo";

const Header = () => {
  return (
    <div>
      <header className="py-10 border-b border-gray-300 shadow-sm">
        <div className="px-10">
          <ul className="flex gap-16 items-center">
            <li>
              <Link to="/home">
                <Logo size="40px" />
              </Link>
            </li>
            <li>
              <Link
                className="font-bold uppercase hover:text-accent"
                to="/menu"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className="font-bold uppercase hover:text-accent"
                to="/menu"
              >
                Rewards
              </Link>
            </li>
            <li>
              <Link
                className="font-bold uppercase hover:text-accent"
                to="/menu"
              >
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
