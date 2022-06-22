import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      {/* logo */}
      <div className="left-header">
        <div className="logo">
          <Link to="/">
            <span>Box</span>web
          </Link>
        </div>
        {/* nav-option */}
        <ul className="nav-option">
          <li>
            <Link to="/discover">Discover</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/">How it Works</Link>
          </li>
        </ul>
      </div>
      {/* connect wallet */}
      <button className="connect-wlt">Connect Wallet</button>
    </header>
  );
};

export default Header;
