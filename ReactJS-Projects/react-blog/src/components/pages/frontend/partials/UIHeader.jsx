import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const UIHeader = () => {
  const [showNav, setShowNav] = React.useState(false);

  const handleNav = () => setShowNav(!showNav);

  return (
    <>
      <header>
        <div className="bg-accent text-primary ">
          <div className="container">
            <div className="flex justify-between items-center py-2">
              <ul className="flex gap-4">
                <li>
                  <Link to="#" className="text-white">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-4">
                <li>
                  <Link to="/login" className="text-white text-xs">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white text-xs">
                    Log-In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky top-0 bg-primary z-">
          <div className="container ">
            <div className="relative">
              <div className="flex justify-between items-center py-3 ">
                <img
                  src="public\images\logo.png"
                  alt=""
                  className="h-auto w-28"
                />
                <div className="flex gap-2">
                  <button className="size-6  bg-content text-primary flex justify-center items-center rounded-lg">
                    <FaSearch />
                  </button>
                  <button className="flex justify-center items-center md:hidden">
                    <FaBars onClick={handleNav} />
                  </button>
                </div>
              </div>

              <nav
                className={`${
                  showNav ? "show" : ""
                } md:!max-h-[30px] md:absolute md:top-5 md:right-16`}
              >
                <ul className="space-y-6 p-4 md:flex md:gap-5 md:space-y-0 md:p-0">
                  <li>
                    <Link
                      to="/home"
                      className="font-medium transition-color hover:text-accent active:text-accent"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="font-medium transition-color hover:text-accent"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/single"
                      className="font-medium transition-color hover:text-accent"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="font-medium transition-color hover:text-accent"
                    >
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="font-medium transition-color hover:text-accent"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UIHeader;
