import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ETH from '../../../../assets/icons/ETH_Logo.svg';
import { ReactComponent as CyconIcon } from '../../../../assets/icons/boxed-cycon-icon.svg';
import Card from '../../../../components/Card';
import { SeedDataType } from '../../seedDataType';

import styles from './MarketplaceCard.module.scss';

interface ICollectionCard {
  DataItem?: any;
  page?: string;
  profileData?: any;
}

const uri = (id: number) => require(`/src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`);

function CollectionCard({ page, profileData, DataItem }: ICollectionCard) {
  const navigate = useNavigate();

  if (page === 'market-place' && DataItem !== undefined) {
    return (
      <div className={styles.CardContainer} onClick={() => navigate(`/marketplace/${DataItem.collection}/${DataItem.id}`)}>
        {
          <Card variant="primary" border={true}>
            <div className={styles.TopItems}>
              <img className={styles.Image} src={uri(DataItem.id)} alt="NFT IMAGE" />
              <div className={styles.TextContainer}>
                <div className={styles.Title}>{DataItem.title}</div>
                {<div className={styles.Owner}>{DataItem.collection}</div>}
              </div>
            </div>

            <div className={classNames(styles.BottomItems)}>
              {
                <div className={styles.UserItems}>
                  {/* FIX: Needs to be made dynamic once we have API data*/}
                  <img className={styles.Avatar} src={require('src/assets/icons/avatar.png')} />
                  <div className={styles.UserName}>{DataItem.creator}</div>
                </div>
              }

              <div className={styles.PriceItems}>
                {<div className={styles.PriceTitle}>PRICE</div>}
                <div className={styles.Price}>
                  {/* FIX: Currency needs to be made dynamic */}
                  <img src={ETH} />
                  {DataItem.price} ETH
                </div>
              </div>
            </div>
          </Card>
        }
      </div>
    );
  }

  return (
    <div className={styles.CardContainer}>
      <Card variant="primary" border={true}>
        <div className={classNames(styles.TopItems, styles.PTopItems)}>
          <img src={require('../../../../assets/images/Avatar2.png')} className={styles.Image} alt="NFT IMAGE" />
          <div className={styles.TextContainer}>
            <div className={styles.Title}>{profileData.contentName}</div>
          </div>
        </div>

        <div className={classNames(styles.BottomItems, styles.PBottomItems)}>
          <div className={styles.PriceItems}>
            {profileData.amount === 'FREE' ? (
              <div className={classNames(styles.AmountContainer, styles.AmountFreeContainer)}>{profileData.amount}</div>
            ) : (
              <div className={styles.AmountContainer}>
                <CyconIcon className={styles.Cycon} fill="#f37123" />
                <div className={styles.CyconDescDiv}>{profileData.amount}</div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CollectionCard;
