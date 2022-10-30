import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { userList } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(userList);

  const deleteUser = (id) => {
    console.log("CLICKED");
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "transactions", headerName: "Transactions", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit User</button>
            </Link>
            <DeleteOutlinedIcon
              className="userListDelete"
              onClick={() => deleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userlist">
      <div className="userTitleContainer">
        <h1 className="userTitle">User List</h1>
        <Link to="/newuser">
          <button className="userAddButton">Add New</button>
        </Link>
      </div>
      <div className="userListContainer">
        <div style={{ display: "flex", height: "90%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[8]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}
