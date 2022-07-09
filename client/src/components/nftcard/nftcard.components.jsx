import React, { useState } from "react";
import "./nftcard.styles.css";

// interface CardProps {
//     artist: String,
//     artlist_picture: String,
//     nft_imgsrc: String,
//     current_bid: Number
// }

const Nftcard = ({name, image}) => {
  // const [showbid, setShowBid] = useState(false);


  // const bidBtnClassName = showbid ? "display-block" : "display-none";
  return (
    <div
      className="nft-card"
    >
      <div className="card-header">
        <img
          className="artist-logo"
          src={`https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2F5VAunHscTO5Nt8WgCezb0i2oVskplFVhVgwmvISfiWQlrBulCxUL7zCYUkRfVF04_47QmNlpWqqdfVraThlhLBEZjuWzajmYDYc9vOc%3Ds10000?fit=max&h=120&w=120&auto=format&s=55ddc79f3fd66e42a81810c55ab76079`}
          alt=""
        />
        <p>{name ? name : "@Hape"}</p>
      </div>
      <img
        className="nft-img"
        src={image ? image : `https://img.seadn.io/files/fb49368ae9e8b3d903d129df4ee3c45b.png?fit=max`}
        alt=""
      />
      <div className="card-status">
        <div className="rmn-time">
          <h3>23h: 41m: 21s</h3>
          <p>Remaining Time</p>
        </div>
        <div className="bid-details">
          <h4>14.89ETH</h4>
          <p>Highest Bid</p>
        </div>
      </div>
      <button className="place-bid display-block">Place a bid</button>
    </div>
  );
};

export default Nftcard;
