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
