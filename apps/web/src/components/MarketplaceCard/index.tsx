import React from 'react';

import styles from './MarketplaceCard.module.scss';
import ETH from '../../assets/icons/ETH_Logo.svg';
import { SeedDataType } from 'src/pages/Marketplace/seedDataType';

interface ICollectionCard {
  DataItem: SeedDataType;
}

function CollectionCard({ DataItem: { id, avatar, creator, title, collection, price } }: ICollectionCard) {
  console.log(avatar);
  return (
    <a href="">
      <div className={styles.CardContainer}>
        <div className={styles.TopItems}>
          <img className={styles.Image} src={require(`../../assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
          <div className={styles.TextContainer}>
            <div className={styles.Title}>{title}</div>
            <div className={styles.Owner}>{collection}</div>
          </div>
        </div>
        <div className={styles.BottomItems}>
          <div className={styles.UserItems}>
            <img className={styles.Avatar} src={require('../../assets/icons/avatar.png')} />
            <div className={styles.UserName}>{creator}</div>
          </div>

          <div className={styles.PriceItems}>
            <div className={styles.PriceTitle}>PRICE</div>
            <div className={styles.Price}>
              <img src={ETH} />
              {price} ETH
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CollectionCard;
