import React from "react";
import "./newuser.css";

export default function NewUser() {
  return (
    <div className="newuser">
      <div className="newUserContainer">
        <h1 className="newUserTitle">New User Form</h1>
        <form>
          <div className="newUserForm">
            <div>
              <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Enter username" />
              </div>
              <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Enter fullname" />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
            <div>
              <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Enter Address" />
              </div>
              <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label for="female">Female</label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button className="newUserButton">Add User</button>
      </div>
    </div>
  );
}
