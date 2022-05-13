import React from 'react';
import styles from './CollectionCard.module.scss';

interface ICollectionCard {
  cardNumber: string;
}

function CollectionCard({ cardNumber }: ICollectionCard) {
  return (
    <a href="">
      <div className={styles.CardContainer}>
        <div style={{ position: 'relative' }}>
          <div className={styles.Icon}></div>
          <img className={styles.Image} src={require(`../../assets/images/NFTTiles/NFT_Tiles-${cardNumber}.jpg`)} alt="NFT IMAGE" />
        </div>
        <div className={styles.TextContainer}>
          <div className={styles.Title}>As time goes by - this is clouds for the run #2/14</div>
          <div className={styles.Owner}>SIDEUYS COLLECTION</div>
        </div>
        <div className={styles.PriceContainer}>
          <div className={styles.Icon}></div>
          <div className={styles.Price}>0.456 ETH</div>
        </div>
      </div>
    </a>
  );
}

export default CollectionCard;
