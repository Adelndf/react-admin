import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ title, isMoney, link, icon }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{isMoney && "$"} 27431</span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <span className="perc pos">
          <KeyboardArrowUpIcon />
          20%
        </span>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
