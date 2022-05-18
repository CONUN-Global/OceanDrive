import React from 'react';

import Card from 'src/components/Card';

import { useNavigate } from 'react-router-dom';
import { SeedDataType } from 'src/pages/Marketplace/seedDataType';
import ETH from 'src/assets/icons/ETH_Logo.svg';

import styles from './MarketplaceCard.module.scss';

interface ICollectionCard {
  DataItem: SeedDataType;
}

function CollectionCard({ DataItem: { id, creator, title, collection, price } }: ICollectionCard) {
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
