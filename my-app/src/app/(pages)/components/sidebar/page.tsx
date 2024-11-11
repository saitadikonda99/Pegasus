"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import "./page.css";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoPerson } from "react-icons/io5";



const sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const router = useRouter() 

  const toggleSubMenu = (option: any) => {
    return () => {
      if (openSubMenu !== null) {
        setIsOpen(null);
        setOpenSubMenu(null);
      } else {
        setIsOpen(option.name);
        setOpenSubMenu(option.name);
      }
    };
  };

  const handleNav = (link: any) => {
    return () => {
      if (link) {
        void router.push(link);
      }
    };
  };

  const sidebarOptions = [
    {
      name: "Home",
      icon: <MdOutlinePublishedWithChanges className="sideBar-icon" />,
      link: "/admin/home",
    },
    {
      name: "Add Admin",
      icon: <MdOutlinePublishedWithChanges className="sideBar-icon" />,
      link: "/admin/addAdmin",
    },
    {
      name: "Update Club",
      icon: <MdOutlinePublishedWithChanges className="sideBar-icon" />,
      link: "/",
      subOptions: [
        { name: "Update Lead", icon: <IoPerson className="sideBar-icon" />, link: "/admin/clubUpdate/lead" },
        { name: "Update Lead", icon: '', link: "/admin/clubUpdate/lead" }
      ],
    }
  ];

  return (
    <div className="SidebarComponent">
      <div className="SidebarComponent-in">
        <div className="SidebarComponent-in-in">
        {sidebarOptions.map((option, index) => (
            <div className="Sidebar-box" key={index} onClick={handleNav(option.link)}>
              <div className="Sidebar-box-in" onClick={toggleSubMenu(option)}>
                {option.icon}
                <p>{option.name}</p>
              </div>
              {option.subOptions && openSubMenu === option.name && (
                <div className="Sidebar-box">
                  {option.subOptions.map((subOption, subIndex) => (
                    <div className="Sidebar-box-in subOption" key={subIndex} onClick={handleNav(subOption.link)}>
                      {subOption.icon}
                      <p>{subOption.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
