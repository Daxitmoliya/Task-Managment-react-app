import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../App.css";
import { auth } from '../firebase';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <header className="header">
      <h1>Task Manager</h1>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          <img 
            src="https://img.icons8.com/ios-filled/50/ffffff/user.png" 
            alt="User Logo" 
            className="user-icon"
          />
        </button>
        {isDropdownOpen && (
          <nav className="dropdown-menu">
            <ul>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
