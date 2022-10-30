import React from "react";
import "./newproduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="addProductCointainer">
        <h1 className="addProductTitle">New Product</h1>
        <form>
          <div className="addProductForm">
            <div>
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Enter product name" />
              </div>
              <div className="addProductItem">
                <label>Description</label>
                <input type="text" placeholder="Enter product description" />
              </div>
              <div className="addProductItem">
                <label>Brand</label>
                <input type="text" placeholder="Enter product brand" />
              </div>
            </div>
            <div>
              <div className="addProductItem">
                <label>Size</label>
                <input type="text" placeholder="Enter product size" />
              </div>
              <div className="addProductItem">
                <label>Stock</label>
                <input type="number" placeholder="Enter product stock" />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="number" placeholder="Enter product price" />
              </div>
              <div className="addProductItem">
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <button className="addProductButton">Add Product</button>
      </div>
    </div>
  );
}
