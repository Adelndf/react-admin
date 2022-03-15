import React from "react";
import "./List.scss";
import { DataTable, Navbar, Sidebar } from "./../../components";
import { Fade } from "react-reveal";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list__container">
        <Navbar />
        <Fade>
          <div className="dataTable__Wtapper">
            <DataTable />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default List;
