import React, { useState } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { TableDataCols, TableDataRows } from "../../staticData";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [data, setData] = useState(TableDataRows);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const actionCol = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewBtn">view</div>
            </Link>
            <div
              className="deleteBtn"
              onClick={() => handleDelete(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="title">
        <h1>users</h1>
        <Link to="/users/new">
          <div className="btn">add new user</div>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={TableDataCols.concat(actionCol)}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
