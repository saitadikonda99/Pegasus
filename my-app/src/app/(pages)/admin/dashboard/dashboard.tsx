import React from "react";
import axios from "axios";
import { useState, useEffect, ReactNode } from "react";

// imports start here
import Sidebar from '../../components/sidebar/page'
import Navbar from '../../components/navbar/page'

import './page.css'

const Dashboard = ({ children : any}) => {

  const [userDetails, setUserDetails] = useState({
    username: "",
    name: "",
    role: "",
});

useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserDetails({
        username: user.username,
        name: user.name,
        role: user.role,
    });
}, []);

  return (
    <div className="DashboardComponent">
      <div className="DashboardComponent-in">
        <div className="DashboardComponent-Nav">
          <Navbar userDetails={userDetails}/>
        </div>
        <div className="DashboardComponent-one">
          <div className="DashboardComponent-one-in">
            <div className="DC-sideBar">
                <Sidebar />
            </div>
            <div className="DC-one">
              {children}
            </div>
          </div>
        </div>
        <div className="DashboardComponent-Footer">
          <div className="DashboardComponent-Footer-in">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
