import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  CredentialProvider,
  Guard,
  any,
  not,
  guardFactory,
  protect,
} from "../react-guard/src";
import { NeedAdmin, NeedStaff } from "../requirements";
import { Roles } from "../../constants/";

export default () => {
  const [role, setRole] = useState([]);
  const Admin = guardFactory(NeedAdmin);
  const Staff = guardFactory(NeedStaff);
  useEffect(() => {
    getcurrentRole();
  }, []);

  const getcurrentRole = () => {
    let token = localStorage.getItem("token");
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let { level } = JSON.parse(jsonPayload);
    let currentRole = Roles.find((e) => e.credentials === level);
    setRole(currentRole);
  };

  return (
    <CredentialProvider value={role.credentials}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../../home.html" className="brand-link">
          <span className="brand-text font-weight-light">
            UMKM-SharedService
          </span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>Home</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/posmachine" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Pos Machine</p>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link to="/branch" className="nav-link">
                  <i className="nav-icon fas fa-building" />
                  <p>Branch</p>
                </Link>
              </li> */}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-chart-bar"></i>
                  <p>
                    Sales<i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/sales/dashboard" className="nav-link">
                      <i className="nav-icon fas fa-home" />
                      <p>Dashboard</p>
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <Link to="/product" className="nav-link">
                      <i className="nav-icon fas fa-truck" />
                      <p>Product</p>
                    </Link>
                  </li> */}
                  <li class="nav-item">
                    <Link to="/order" className="nav-link">
                      <i className="nav-icon fas fa-cash-register" />
                      <p> Order</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/order/create" className="nav-link">
                      <i className="nav-icon fas fa-cash-register" />
                      <p> Cashier</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-warehouse"></i>
                  <p>
                    Warehouse<i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/warehouse/dashboard" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>Dashboard</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/product" className="nav-link">
                      <i className="nav-icon fas fa-truck" />
                      <p>Product</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/material" className="nav-link">
                      <i className="nav-icon fas fa-dolly" />
                      <p>Material</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-industry"></i>
                  <p>
                    Production<i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/productiondashboard" class="nav-link">
                      <i class="nav-icon fas fa-tachometer-alt"></i>
                      <p>Dashboard</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/listpro" class="nav-link">
                      <i class="nav-icon fas fa-industry"></i>
                      <p>Production</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/bahan" class="nav-link">
                      <i class="nav-icon fas fas fa-pallet"></i>
                      <p>Production Material</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/machine" class="nav-link">
                      <i class="nav-icon fas fa-cog"></i>
                      <p>Machine Information</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </CredentialProvider>
  );
};
