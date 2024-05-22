import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="container py-5">
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
                <a href="/public/JP Resume.pdf" target="_blank">
                  <button className="btn--ui btn--transparent text-cGreen phone:p-2 phone:px-5 ">
                    Download Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
