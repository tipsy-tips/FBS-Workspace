import React, { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdFormatListNumbered } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../store/StoreContext";
import { checkLocalStorage } from "../helpers/functions-general";

const Navigation = () => {
  const { store } = React.useContext(StoreContext);

  const name = store.credentials?.data.user_name;

  const handleLogout = () => {
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("glatoken");
        window.location.replace(`/login`);
        return;
      }
    });
  };

  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Set active link based on current URL path
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <aside className="py-6 w-[270px] h-screen bg-primary border-r border-line">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center font-bold mb-0">Dashboard</h1>
      </div>
      <div className="h-[calc(100%-20px)] flex justify-between flex-col">
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
              activeLink === "/database/skills" ? "active" : ""
            }`}
          >
            <Link to="/database/skills">
              <GiSkills />
              Skills
            </Link>
          </li>
          <li
            className={`nav__link ${
              activeLink === "/database/skills-image" ? "active" : ""
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
          <li
            className={`nav__link ${
              activeLink.startsWith("/database/users") ? "active" : ""
            }`}
          >
            <Link to="/database/users">
              <FaDatabase />
              Users
            </Link>
          </li>
        </ul>
        <div className="flex justify-end">
          <Link>
            <ul className="flex justify-center items-center gap-2 group ">
              <li>
                <h1 className="text-sm mb-0">Logged in as {name}</h1>
              </li>
              <li>
                <span className="before:bg-accent before:block before:h-[30px] before:w-[2px] before:rounded-full" />
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn--transparent mr-2"
                >
                  Sign-Out
                </button>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
