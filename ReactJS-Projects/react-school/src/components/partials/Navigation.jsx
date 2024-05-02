import React from "react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./svg/Logo";

const Navigation = () => {
  return (
    <aside className="py-6 w-[270px] h-screen bg-primary h-screen border-r border-line">
      <div className="flex items-center justify-center gap-4 ">
        <Logo />
        <h1 className="text-center mb-0">School</h1>
      </div>
      <ul className="nav">
        <li className="nav__link">
          <Link to="#">
            <FaTiktok />
            Dashboard
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok />
            Messages
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok />
            Calendar
          </Link>
        </li>
        <li className="nav__link active">
          <Link to="#">
            <FaTiktok />
            Database
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok />
            Attendance
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
