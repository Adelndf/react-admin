import React from "react";
import {
  Chart,
  Featured,
  List,
  Navbar,
  Sidebar,
  Widget,
} from "../../components";
import { WidgetData } from "../../staticData";
import "./Home.scss";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <Fade>
          <div className="widgets">
            {WidgetData.map((item, i) => (
              <Widget key={i} {...item} />
            ))}
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} />
          </div>
          <div className="list">
            <List />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
