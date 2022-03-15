import React from "react";
import "./Sidebar.scss";
import { SidebarData } from "../../staticData";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Sidebar = () => {
  const { darkMode, setDarkMode } = useGlobalContext();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="sidebar__logo">AdelDev</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          {SidebarData.map((item, index) => (
            <Link to={item.link} key={index}>
              <li>
                {item.icon}
                <span>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <p>theme options</p>
        <div>
          <span
            onClick={() => setDarkMode(true)}
            className={`dark ${darkMode && `active`}`}
          ></span>
          <span
            onClick={() => setDarkMode(false)}
            className={`light ${!darkMode && `active`}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
