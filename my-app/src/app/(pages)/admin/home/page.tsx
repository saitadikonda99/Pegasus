"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Dashboard from '../dashboard/dashboard'
import { toast } from "react-hot-toast";
import axios from 'axios'



// import icons here
// import { FaUserGraduate } from "react-icons/fa";
// import { SiGoogleclassroom } from "react-icons/si";
// import { BsGraphUpArrow } from "react-icons/bs";

import './page.css'

// import Chart from './chart/chart'

const page = () => {

    const [statsData, setStatsData] = useState({
        Members: 0,
        Activities: 0,
        Projects: 0,
      });

    useEffect( () => {
        
        const fetch = async () => {
            try {
                const response = await axios.get("/api/overAllStats", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                });
                
                console.log(response)

                if (response.status === 200) {
                    setStatsData({
                        Members: response.data[0].total_members,
                        Activities: response.data[0].total_activities,
                        Projects: response.data[0].total_projects,
                    })
                } else {
                    toast.error("Failed to fetch stats");
                }
            } catch (error) {
                toast.error("Internal server error");
            }
        }

        fetch();

    }, [])
      

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
    <Dashboard>
        <div className="AdminHomeComponent">
            <h1>Home Page</h1>
        </div>
    </Dashboard>
  )
}

export default page