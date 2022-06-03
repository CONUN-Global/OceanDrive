import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import Table from './Table';
import History from './History';

import styles from './SingleItem.module.scss';
import ETH from '../../assets/icons/ETH_Logo.svg';
import Button from '../../components/Button';

import { NFTData } from './SEED_DATA';

import classNames from 'classnames';

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
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>
      <RightSideLayer>
        <div className={styles.ContentContainer}>
          <div className={styles.UpperContainer}>
            <img className={styles.Image} src={require(`src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
            <div className={styles.TextContainer}>
              <h1>{NFTData.title}</h1>
              <div className={styles.CreatorContainer}>
                <div className={classNames(styles.User, styles.CreatorItem)}>
                  <img className={styles.Avatar} src={require('src/assets/icons/avatar.png')} />
                  <div>
                    <div>creator</div>
                    <div className={styles.CreatorName}>{NFTData.creator}</div>
                  </div>
                </div>
                <div className={classNames(styles.CollectionName, styles.CreatorItem)}>{collection}</div>
              </div>
              <div className={styles.DescriptionBox}>
                <h4>Description</h4>
                <div>{NFTData.description}</div>
              </div>
            </div>
          </div>
          <div className={styles.LowerContainer}>
            {/* Bottom Right Items */}
            <div className={styles.RightSideContainer}>
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
              {/* PURCHASE PRICE CONTAINER */}
              <div className={styles.PurchaseContainer}>
                <h2>Price</h2>
                <div className={styles.PurchaseBox}>
                  <div className={styles.LeftItems}>
                    <div className={styles.Price}>
                      <img src={ETH} />

                      <div>{NFTData.price}</div>
                    </div>
                    <div className={styles.USDPrice}>${NFTData.priceUSD} USD</div>
                  </div>
                  <button className={styles.BuyButton}>BUY</button>
                </div>
              </div>

              {/* TAGS CONTAINER */}
              <div className={styles.TagContainer}>
                <h2>TAGS</h2>
                <div className={styles.TagBtnContainer}>
                  {NFTData.tags.map((tag, index) => (
                    <Button className={styles.TagBtn} key={index}>
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RightSideLayer>
    </MainBackground>
  );
}

export default SingleItem;
