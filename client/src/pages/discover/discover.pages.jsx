import React from "react";
import "./discover.styles.css";
import { Explorecard } from "../../components";

const Discover = () => {

  const TAGS = [
    "Trending",
    "Top",
    "Art",
    "Collectibles",
    "Domain Name",
    "Trading",
    "Virtual Worlds",
  ]
  return (
    <div className="discover-container">
      <div className="head-dis">
        <h2>EXPLORE</h2>
        <div className="greenbox"></div>
      </div>

      <div className="header-discover">
        <ul className="nav-dis">
          {TAGS.map((tag) => (<li>{tag}</li>))}
        </ul>
      </div>
      <div className="dis-explore">
        <Explorecard />
      </div>
    </div>
  );
};

export default Discover;
