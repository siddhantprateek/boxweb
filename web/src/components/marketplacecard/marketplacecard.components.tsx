import React from "react";
import "./marketplacecard.styles.css";

const Marketplacecard = () => {
  return (
    <div className="marketcard-contain">
      <div className="marketcard">
        <img
          src={`https://lh3.googleusercontent.com/cbE4g0WpvyxiWl6KimQA75IVAEcO73lWhhZMWtpgSFMzGt7YGY1CrwwRsoNhWveQmF08iwbezffrFXroz7EoCdBaTP5YYiJpIF0j=w418`}
          alt=""
        />
      </div>
      <div className="mark-cont">
        <div className="markupside-cont">
          <div className="market-content">
            <img
              src={`data:image/jpeg;base64,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`}
              className="market-logo"
              alt=""
            />
            <h1>@Hape Club</h1>
          </div>
          <div className="mark-desp">
            <p>
              Welcome to the home of Hape club on OpenSea. Discover the best
              items in this collection
            </p>
          </div>
        </div>
        <div className="markdownside-cont">
          <h1>
            15.97ETH <span>($321.25)</span>
          </h1>
          <h3>Current Bid</h3>
          <button className="btn-mark">Place a Bid</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplacecard;
