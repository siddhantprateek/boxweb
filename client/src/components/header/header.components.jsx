import React from "react";
import { Link } from "react-router-dom";
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import "./header.styles.css";

const Header = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const disconnectWallet = useDisconnect()
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
      {
        !address ? (
          <div>
            <button onClick={connectWithMetamask} className="connect-wlt">Connect Wallet</button>
          </div>
        ) : (
          <div className="disconnect-btn">
            <div className="connect-address">{address.slice(1, 8)}...</div>
            <button onClick={disconnectWallet} className="connect-wlt">Disconnect</button>
          </div>
        )
      }
    </header>
  );
};

export default Header;
