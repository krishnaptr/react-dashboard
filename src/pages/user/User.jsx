import React from "react"
import "./user.css"
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

export default function User() {
    return (
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newuser">
              <button className="userAddButton">Add New</button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Catherine White</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentityOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">catherinee</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroidOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">+62 888 777 222</span>
                </div>
                <div className="userShowInfo">
                  <EmailOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">catherine@gmail.com</span>
                </div>
                <div className="userShowInfo">
                  <FmdGoodOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">Kuta Selatan</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="catherinee"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Catherine White"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="catherine@gmail.com"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="+62 888 777 222"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Kuta Selatan"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a"
                      alt=""
                    />
                    <label htmlFor="file">
                      <UploadFileOutlinedIcon className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}
