import React from "react";
import "./discover.styles.css";
import { Explorecard } from "../../components";

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="head-dis">
        <h1>EXPLORE</h1>
        <div className="greenbox"></div>
      </div>

      <div className="header-discover">
        <ul className="nav-dis">
          <li>Trending</li>
          <li>Top</li>
          <li>Art</li>
          <li>Collectibles</li>
          <li>Domain Name</li>
          <li>Trading</li>
          <li>Virtual Worlds</li>
        </ul>
      </div>
      <div className="dis-explore">
        <Explorecard />
      </div>
    </div>
  );
};

export default Discover;
