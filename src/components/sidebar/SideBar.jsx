import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link
                  to="/"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <li className="sidebarListItem">
                    <LineStyleIcon className="sidebarIcon" />
                    Home
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Menu</h3>
              <ul className="sidebarList">
              <Link
                  to="/products"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <li className="sidebarListItem">
                    <WidgetsIcon className="sidebarIcon" />
                    Products
                  </li>
                </Link>
                <Link
                  to="/users"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <li className="sidebarListItem">
                    <PersonIcon className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <DescriptionIcon className="sidebarIcon" />
                  Orders
                </li>
              </ul>
            </div>
          </div>
        </div>
  );
}
