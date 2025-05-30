import React from 'react';
import { Search, Plus } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Header.css";
import profile2 from "../Assets/profile.png";

const Header = () => (
  <header className="dashboard-header">

    <div className="search-wrapper">
      <span className="search-icon">
        <Search size={18} color="#99a2ac" />
      </span>
      <input type="text" className="search-input" placeholder="Search" />
      <span className="bell-icon">
        <FontAwesomeIcon icon={faBell} />
      </span>
    </div>

    <div className="profile-icons">
      <img src={profile2} alt="Profile" height={38} width={38} />
      <div className="plus-icon-box">
        <Plus size={16} color="white" />
      </div>
    </div>
  </header>
);

export default Header;
