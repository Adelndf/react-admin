import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { darkMode, setDarkMode } = useGlobalContext();

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            english
          </div>
          {darkMode ? (
            <div className="item" onClick={() => setDarkMode(!darkMode)}>
              <WbSunnyOutlinedIcon />
            </div>
          ) : (
            <div className="item" onClick={() => setDarkMode(!darkMode)}>
              <DarkModeOutlinedIcon />
            </div>
          )}
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <div className="note">2</div>
            <ChatBubbleOutlineIcon />
          </div>
          <div className="item">
            <ListOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
