import React from "react";

import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "DashBoard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r border-gray-300 h-full text-base  pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((item, index) => (
        <NavLink 
          to={item.path} 
          key={index} 
          end={item.path === "/owner"} // Proper end prop for root route
          className={({isActive}) => `
            flex items-center py-3 px-4 md:px-8 gap-3 
            ${isActive 
              ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" 
              : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="w-5 h-5" />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;