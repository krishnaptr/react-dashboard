import React, { useState } from "react";
import "./productlist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { productList } from "../../dummyData";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productList);

  const deleteProduct = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product_name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.product_name}
          </div>
        );
      },
    },
    { field: "size", headerName: "Size", width: 100 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "stock", headerName: "Stock", width: 80 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit product</button>
            </Link>
            <DeleteOutlinedIcon
              className="productListDelete"
              onClick={() => deleteProduct(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product List</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Add New</button>
        </Link>
      </div>
      <div className="productListContainer">
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
