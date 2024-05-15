import React, { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdFormatListNumbered } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Set active link based on current URL path
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <aside className="py-6 w-[270px] h-screen bg-primary border-r border-line">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center font-bold mb-0">Navigation</h1>
      </div>
      <ul className="nav">
        <li
          className={`nav__link ${
            activeLink.startsWith("/database/counter") ? "active" : ""
          }`}
        >
          <Link to="/database/counter">
            <MdFormatListNumbered />
            Counter
          </Link>
        </li>
        <li
          className={`nav__link ${
            activeLink.startsWith("/database/skills") ? "active" : ""
          }`}
        >
          <Link to="/database/skills">
            <GiSkills />
            Skills
          </Link>
        </li>
        <li
          className={`nav__link ${
            activeLink.startsWith("/database/skills-image") ? "active" : ""
          }`}
        >
          <Link to="/database/skills-image">
            <GiSkills />
            Skills - images
          </Link>
        </li>
        <li
          className={`nav__link ${
            activeLink.startsWith("/database/projects") ? "active" : ""
          }`}
        >
          <Link to="/database/projects">
            <FaDatabase />
            Projects
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
