import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="px-4 py-6 w-[300px]">
      <h1>Logo Here</h1>

      <ul>
        <li>
          <Link to="#">Dashboard</Link>
          <Link to="#">Messages</Link>
          <Link to="#">Calendar</Link>
          <Link to="#">Database</Link>
          <Link to="#">Attendance</Link>
          <Link to="#">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
