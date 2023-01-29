import React from "react";
import "./collectioncard.styles.css";
import ICollections from "../interfaces/intefaces";

const Collectioncard = (props: ICollections) => {
  return (
    <div className="explore-box-container">
      <div className="upperdiv">
        <img src={props.bannerurl} alt="" />
      </div>
      <div className="artist-content">
        <img src={props.artist_url} className="circle-img" alt="" />
        <h2>{props.artist_name}</h2>
        <p>{props.collection_desp}</p>
      </div>
    </div>
  )
}

export default Collectioncard