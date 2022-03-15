import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const value = 0.6;

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">total revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bot">
        <div className="featured__chart">
          <CircularProgressbar
            value={value}
            maxValue={1}
            text={`${value * 100}%`}
            strokeWidth={5}
            styles={buildStyles({
              backgroundColor: "#fff",
              textColor: "#6439ff",
              trailColor: "#ddd",
              pathColor: `rgba(100, 57, 255, ${value + 0.45})`,
            })}
          />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          recusandae!
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">target</div>
            <div className="itemResult pos">
              <KeyboardArrowUpIcon />
              <p>$12.4k</p>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last week</div>
            <div className="itemResult pos">
              <KeyboardArrowUpIcon />
              <p>$12.4k</p>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult neg">
              <KeyboardArrowDownIcon />
              <p>$12.4k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
