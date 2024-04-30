import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import {
  LiaKeySolid,
  LiaSignOutAltSolid,
  LiaUserCircle,
  LiaUserCircleSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header px-4 py-3 border-b border-line">
      <div className="flex justify-end items-center gap-4 w-full relative">
        <button>
          <CiBellOn className="text-3xl" />
        </button>
        <img
          src="https://placeholder.com/80"
          alt=""
          className="rounded-full size-[40px]"
        />
        <button className="flex items-center gap-4">
          Muh. Bambang <BiChevronDown />
        </button>

        <div className="header-dropdown hidden absolute bg-secondary p-4 rounded-lg right-0 top-[calc(100%+20px)] text-center shadow-xl">
          <img
            src="https://placeholder.com/80"
            alt=""
            className="rounded-full size-[40px] mx-auto"
          />
          <h4 className="mb-1">Muh Bambang</h4>
          <p className="text-sm w-[150px] truncate">muhbangbang@gmail.com</p>
          <ul className="flex justify-center gap-5">
            <li>
              <Link to="#" className="text-2xl">
                <LiaUserCircleSolid />
              </Link>
            </li>
            <li>
              <Link to="#" className="text-2xl">
                <LiaKeySolid />
              </Link>
            </li>
            <li>
              <Link to="#" className="text-2xl">
                <LiaSignOutAltSolid />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
