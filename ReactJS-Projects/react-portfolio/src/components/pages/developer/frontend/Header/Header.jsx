import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div className="">
            <img
              src="../../../public/images/logo.svg"
              alt=""
              className="size-[60px]"
            />
          </div>

          <div>
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  to="/home"
                  className="text-cGreen font-bold hover:text-bold hover:text-cGreen  hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-cGreen hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-cGreen  hover:underline"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <button className="btn--ui btn--transparent text-cGreen ">
                  Download Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
