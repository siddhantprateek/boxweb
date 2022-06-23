import React from "react";
import Marketplacecard from "../../components/marketplacecard/marketplacecard.components";
// <Marketplacecard />
import { NftCard } from "../../components";
import './market.styles.css'
const Market = () => {
  return (
    <div className="collections-page">
      <div className="collection-banner-header">
        <img 
          className="collection-banner"
          src={`https://lh3.googleusercontent.com/N2gqJDxqTz_O97Qr1UYLggEAVc5lG_Kc8lmdppLsCkse1zXvfGDXVxiUOsLaaVfXYcTr4_tW0omQlFO3ZBicCY86USGIY4kwc6ox=h600`} 
          alt="" />
          <div className="collection-header-details">
            <img 
              className="collection-pro-image"
              src={`https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2F5VAunHscTO5Nt8WgCezb0i2oVskplFVhVgwmvISfiWQlrBulCxUL7zCYUkRfVF04_47QmNlpWqqdfVraThlhLBEZjuWzajmYDYc9vOc%3Ds10000?fit=max&h=120&w=120&auto=format&s=55ddc79f3fd66e42a81810c55ab76079`} alt="" />
            <div className="collection-details">
              <div className="collection-grp-1">
                <button className="collect-follow-me">Follow</button>
                <h1>@HAPE PRIME</h1>
              </div>
              <p>Welcome to the home of Hape club on OpenSea. Discover the best items in this collection.</p>
            </div>  
          </div>
      </div>
      <div className="collection-status">
        <div className="total-items">
          <h1>76</h1>
          <p>Items</p>
        </div>
        <div className="owner">
          <h1>7</h1>
          <p>Owner</p>
        </div>
        <div className="floor-price">
          <h1>0.15</h1>
          <p>Floor Price</p>
        </div>
        <div className="total-volume">
          <h1>0.00</h1>
          <p>Total volume</p>
        </div>
      </div>
      <div className="nft-collections-display">
        <div className="collection-list">
          {[...Array(20)].map((key) => (<NftCard key={key} />))}
        </div>
      </div>
    
    </div>
  );
};

export default Market;
