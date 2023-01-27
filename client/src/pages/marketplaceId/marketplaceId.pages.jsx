import React from 'react'
import { useParams } from 'react-router-dom'
import './marketplaceid.styles.css';

const MarketplaceId = () => {
  let { marketId } = useParams();
  
  return (
    <div className="marketplaceid-page">
        <p>Route: {marketId}</p>
    </div>
  )
}

export default MarketplaceId