import React from "react";
import "./collectioncard.styles.css";

const Collectioncard = ({
  bannerurl,
  artist_url,
  artist_name,
  collection_desp,
}) => {
  return (
    <div className="explore-box-container">
      <div className="upperdiv">
        <img src={bannerurl} alt="" />
      </div>
      <div className="artist-content">
        <img src={artist_url} className="circle-img" alt="" />
        <h2>{artist_name}</h2>
        <p>{collection_desp}</p>
      </div>
    </div>
  );
};

export default Collectioncard;
