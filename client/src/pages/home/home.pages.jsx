import React from "react";
import { NftCard } from "../../components";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-bg">
        <div className="oval-1"></div>
        <div className="oval-2"></div>
        <div className="oval-3"></div>
        <div className="oval-4"></div>
        <div className="oval-5"></div>
      </div>
      <div className="home-head-container">
        <div className="home-content">
          <h1>
            Discover <span className="head-bold"> Rare Collections</span> of{" "}
            <span className="head-bold">
              Arts & NFTs.<div className="green-highlight"></div>
            </span>
          </h1>
        </div>
        <div className="tilted-cards">
          <div className="nft-head-card">
            <NftCard />
          </div>
          <div className="nft-head-card-2">
          <NftCard />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
