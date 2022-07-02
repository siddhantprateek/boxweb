import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import React, { useEffect } from 'react'

const Collections = () => {
  useEffect(() => {
    const sdk = new ThirdwebSDK('rinkeby')
    const contract = sdk.getMarketplace("0x81012D50531BaE54062bB817258dAcEFa01cc14d")
    const get_marketplace = async () => {
      const listings = await contract.getActiveListings();
      console.log(listings)
      console.log("price:", listings[0].buyoutCurrencyValuePerToken.displayValue)
    }
    get_marketplace()

  }, [])

  return (
    <div>
      <h1>Collection</h1>
    </div>
  )
}

export default Collections