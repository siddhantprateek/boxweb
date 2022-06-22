import React from "react";
import "./explorecard.styles.css";
import Collectioncard from "../collectioncard/collectioncard.component";

const explorecard = () => {
  const explorecard = [
    {
      bannerurl:
        "https://imageio.forbes.com/specials-images/imageserve/622653cb5b0c25ea4f4fa271/Goodog-NFT-illustrations/0x0.jpg?format=jpg&height=1920&width=4800",
      artist_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWTsw92jYEN6g1f6fbEJMgawpWM7f6oYnWg&usqp=CAU",
      artist_name: "Maverick.xyz",
      collection_desp:
        "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
    },
    {
      bannerurl:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/03/23/102272.jpg",
      artist_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Hn1jJStQAsKChytgviINqbjy2FHDcKY6g269Yr3TOrVU9R3L8_zKZAoWmVyvqW1-UkI&usqp=CAU",
      artist_name: "Weirdo.xyz",
      collection_desp:
        "Phanta Bear is jointly launched by MandoPop King Jay Chou's Fashion Brand PHANTACi and EzekClub (https://ezek.io) Phanta Bear is a limited collection of 10,000 digital collectibles that live on the Ethereum blockchain. Each Phanta Bear is unique and randomly generated.",
    },
    {
      bannerurl:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-04/29/15/campaign_images/08bc35c95797/tiktok-famous-doctors-are-getting-into-nfts-and-i-2-416-1651246752-13_dblbig.jpg?resize=1200:*",
      artist_url:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-04/22/20/asset/69062b743bb5/sub-buzz-973-1650657609-16.png?resize=990:990",
      artist_name: "Robo.pqr",
      collection_desp:
        "Lorem ipsum dolor sit amet. Qui illum consequuntur aut perferendis voluptas et saepe natus aut neque velit vel libero tempora est esse quam. Id nulla minima rem placeat impedit aut voluptas expedita eum quidem reiciendis est quam nemo. ",
    },
    {
      bannerurl:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/03/23/102272.jpg",
      artist_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Hn1jJStQAsKChytgviINqbjy2FHDcKY6g269Yr3TOrVU9R3L8_zKZAoWmVyvqW1-UkI&usqp=CAU",
      artist_name: "Weirdo.xyz",
      collection_desp:
        "Phanta Bear is jointly launched by MandoPop King Jay Chou's Fashion Brand PHANTACi and EzekClub (https://ezek.io) Phanta Bear is a limited collection of 10,000 digital collectibles that live on the Ethereum blockchain. Each Phanta Bear is unique and randomly generated.",
    },
    {
      bannerurl:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-04/29/15/campaign_images/08bc35c95797/tiktok-famous-doctors-are-getting-into-nfts-and-i-2-416-1651246752-13_dblbig.jpg?resize=1200:*",
      artist_url:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-04/22/20/asset/69062b743bb5/sub-buzz-973-1650657609-16.png?resize=990:990",
      artist_name: "Robo.pqr",
      collection_desp:
        "Lorem ipsum dolor sit amet. Qui illum consequuntur aut perferendis voluptas et saepe natus aut neque velit vel libero tempora est esse quam. Id nulla minima rem placeat impedit aut voluptas expedita eum quidem reiciendis est quam nemo. ",
    },
    {
      bannerurl:
        "https://imageio.forbes.com/specials-images/imageserve/622653cb5b0c25ea4f4fa271/Goodog-NFT-illustrations/0x0.jpg?format=jpg&height=1920&width=4800",
      artist_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWTsw92jYEN6g1f6fbEJMgawpWM7f6oYnWg&usqp=CAU",
      artist_name: "Maverick.xyz",
      collection_desp:
        "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
    },
  ];
  return (
    <div className="explorecard-container">
      <div className="box-explore">
        {explorecard.map((data) => (
          <Collectioncard
            bannerurl={data.bannerurl}
            artist_url={data.artist_url}
            artist_name={data.artist_name}
            collection_desp={data.collection_desp}
          />
        ))}
      </div>
    </div>
  );
};

export default explorecard;
