import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'src/components/Button';
import { NFTData } from './SEED_DATA';

import styles from './SingleItem.module.scss';

function SingleItem() {
  const { collection, id } = useParams();
  const [clicked, setClicked] = useState<string>('buying-history');

  const headingStyle = (word: string) => {
    if (clicked === word) {
      return {
        color: '#3A3A3A',
      };
    }
  };

  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContainer}>
          <img className={styles.Image} src={require(`src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
          <div className={styles.TextContainer}>
            <h1>{NFTData.title}</h1>
            <div className={styles.DescriptionBox}>
              <h4>Description</h4>
              <div>{NFTData.description}</div>
            </div>
            {/* INFO CONTAINER BOX (VIEWS,LIKES,SOLD) */}
            <div className={styles.InfoContainer}>
              <div className={styles.SingleItem}>
                <div className={styles.ItemTitle}>Views</div>
                <div className={styles.ItemNumber}>{NFTData.views}</div>
              </div>
              |
              <div className={styles.SingleItem}>
                <div className={styles.ItemTitle}>Likes</div>
                <div className={styles.ItemNumber}>{NFTData.likes}</div>
              </div>
              |
              <div className={styles.SingleItem}>
                <div className={styles.ItemTitle}>Sold</div>
                <div className={styles.ItemNumber}>{NFTData.sold}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.LowerContainer}>
          <div className={styles.LeftSide}></div>
          <div className={styles.RightSide}>
            <div className={styles.PriceContainer}>
              <h3 className={styles.PriceTitle}>PRICE</h3>
              <div className={styles.Price}>{NFTData.price} CYCON</div>
              <Button className={styles.PriceBtn}>BUY</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleItem;
