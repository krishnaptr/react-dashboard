import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart"
import {productData} from "../../dummyData"
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Add Product</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Product Sales" style={{ width:'90%'}}/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://apollo-singapore.akamaized.net/v1/files/k6tl4653hsk61-ID/image" alt="" className="productInfoImg" />
                  <span className="productName">Lukisan Bali</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">ID:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Description:</span>
                      <span className="productInfoValue">Lukisan asli dari daerah Bali</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Brand:</span>
                      <span className="productInfoValue">Lokal</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Size:</span>
                      <span className="productInfoValue">Large</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Stock:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                      <span className="productInfoValue">Yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">Rp 800.000</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form>
            <div className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Lukisan Bali" />
                  <label>Description</label>
                  <input type="text" placeholder="Lukisan asli dari daerah Bali" />
                  <label>Brand</label>
                  <input type="text" placeholder="Lokal" />
                  <label>Size</label>
                  <input type="text" placeholder="Large" />
              </div>
              <div className="productFormLeft">
                  <label>Stock</label>
                  <input type="number" placeholder="123" />
                  <label>Price</label>
                  <input type="number" placeholder="Rp 800.000" />
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://apollo-singapore.akamaized.net/v1/files/k6tl4653hsk61-ID/image" alt="" className="productUploadImg" />
                      <label for="file">
                          <UploadFileOutlinedIcon style={{cursor:'pointer'}}/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
              </div>
          </form>
      </div>
    </div>
  );
}