import React from "react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="py-6 w-[270px] h-screen bg-primary h-screen border-r border-line">
      <h1 className="text-center">Logo Here</h1>

      <ul className="nav ">
        <li className="nav__link">
          <Link to="#">
            <FaTiktok /> Dashboard
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok /> Messages
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok /> Calendar
          </Link>
        </li>
        <li className="nav__link active">
          <Link to="#">
            <FaTiktok /> Database
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#">
            <FaTiktok /> Attendance
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
