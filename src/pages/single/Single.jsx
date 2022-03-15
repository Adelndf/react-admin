import React from "react";
import { Fade } from "react-reveal";
import { Chart, List, Navbar, Sidebar } from "../../components";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single__container">
        <Navbar />
        <Fade>
          <div className="single__wrapper">
            <div className="single__content">
              <div className="top">
                <div className="left">
                  <span className="editBtn">edit</span>
                  <div className="title">information</div>
                  <div className="item">
                    <img
                      src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="user-img"
                      className="itemImg"
                    />
                    <div className="details">
                      <h1 className="userTitle">userTitle</h1>
                      <div className="detailsItem">
                        <span className="infoKey">email</span>
                        <span className="infoValue">iadelndf@gmail.com</span>
                      </div>
                      <div className="detailsItem">
                        <span className="infoKey">phone</span>
                        <span className="infoValue">+966 538040776</span>
                      </div>
                      <div className="detailsItem">
                        <span className="infoKey">address</span>
                        <span className="infoValue">Al-nassem, Riyadh. SA</span>
                      </div>
                      <div className="detailsItem">
                        <span className="infoKey">counter</span>
                        <span className="infoValue">KSA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="title">chart</div>
                  <Chart aspect={3 / 1} />
                </div>
              </div>
              <div className="bot">
                <List />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Single;
