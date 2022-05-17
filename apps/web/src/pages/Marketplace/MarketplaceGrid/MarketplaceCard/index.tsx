import React from 'react';

import styles from './MarketplaceCard.module.scss';
import ETH from 'src/assets/icons/ETH_Logo.svg';
import { SeedDataType } from 'src/pages/Marketplace/seedDataType';
import Card from 'src/components/Card';
import { useNavigate } from 'react-router-dom';

interface ICollectionCard {
  DataItem: SeedDataType;
}

function CollectionCard({ DataItem: { id, avatar, creator, title, collection, price } }: ICollectionCard) {
  // FIX: logging to remove error, avatar should come in as a link
  console.log(avatar);
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/marketplace/${collection}/${id}`)} style={{ cursor: 'pointer' }}>
      <Card>
        <div className={styles.TopItems}>
          <img className={styles.Image} src={require(`src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
          <div className={styles.TextContainer}>
            <div className={styles.Title}>{title}</div>
            <div className={styles.Owner}>{collection}</div>
          </div>
        </div>
        <div className={styles.BottomItems}>
          <div className={styles.UserItems}>
            {/* FIX: Needs to be made dynamic once we have API data*/}
            <img className={styles.Avatar} src={require('src/assets/icons/avatar.png')} />
            <div className={styles.UserName}>{creator}</div>
          </div>

          <div className={styles.PriceItems}>
            <div className={styles.PriceTitle}>PRICE</div>
            <div className={styles.Price}>
              {/* FIX: Currency needs to be made dynamic */}
              <img src={ETH} />
              {price} ETH
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
}

export default CollectionCard;
