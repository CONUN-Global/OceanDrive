import React from 'react';
import { useNavigate } from 'react-router-dom';
import ETH from '../../../../assets/icons/ETH_Logo.svg';
import Card from '../../../../components/Card';
import { SeedDataType } from '../../seedDataType';
import styles from './MarketplaceCard.module.scss';

interface ICollectionCard {
  DataItem: SeedDataType;
}

const uri = (id: number) => require(`/src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`);

function CollectionCard({ DataItem: { id, creator, title, collection, price } }: ICollectionCard) {
  const navigate = useNavigate();

  return (
    <div  className={styles.CardContainer} onClick={() => navigate(`/marketplace/${collection}/${id}`)} style={{ cursor: 'pointer' }}>
      <Card variant="primary" border={true}>
        <div className={styles.TopItems}>
          <img className={styles.Image} src={uri(id)} alt="NFT IMAGE" />
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
    </div>
  );
}

export default CollectionCard;
