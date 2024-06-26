import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Untitled.jpg';

const Dashboard = () => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const handleUserClick = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  return (
    <div className="w-65 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-4 bg-gray-900 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="HeatWise Logo" className="h-9 w-13 mr-2" />
          <span className="text-xl"></span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
          <span className="w-8 mr-4">A</span> Creating
        </button>
      </div>
      <nav className="flex-1">
        <ul className="list-none p-0">
          <li className="p-4">
            <Link to="/" className="flex items-center text-white">
              <i className="fa fa-home mr-2"></i> Home
            </Link>
          </li>
          <li className="p-4">
            <Link to="/customers" className="flex items-center text-white">
              <i className="fa fa-user mr-2"></i> Customers
            </Link>
          </li>
          <li className="p-4">
            <Link to="/projects" className="flex items-center text-white">
              <i className="fa fa-folder mr-2"></i> Projects
            </Link>
          </li>
          <li className="p-4">
            <Link to="/Products" className="flex items-center text-white">
              <i className="fa fa-box mr-2"></i> Products
            </Link>
          </li>
          <li className="p-4">
            <Link to="/TeamMembers" className="flex items-center text-white">
              <i className="fa fa-users mr-2"></i> Team members
            </Link>
          </li>
          <li className="p-4">
            <Link to="/facilities" className="flex items-center text-white">
              <i className="fa fa-bolt mr-2"></i> Facilities
            </Link>
          </li>
          <li className="p-4">
            <Link to="/setting" className="flex items-center text-white">
              <i className="fa fa-cog mr-2"></i> Settings
            </Link>
          </li>
          <li className="p-4 flex items-center text-white cursor-pointer" onClick={handleUserClick}>
            <i className="fa fa-user-circle mr-2"></i>
            <div>
              <span>Ahsan Siddiqui</span>
              <br />
              <span>example@gmail.com</span>
            </div>
          </li>
          {isLogoutVisible && (
            <div className="mt-2 p-2 bg-gray-700 rounded shadow-lg">
              <button className="text-white" onClick={() => console.log('Logout clicked')}>Logout</button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
