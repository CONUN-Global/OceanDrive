import React from 'react';
import { ReactComponent as CopyIcon } from '../../../assets/icons/copy-icon.svg';

import styles from './WalletCard.module.scss';

const profileUrl = require('../../../assets/images/Profile.png');

const WalletCard = () => {
  return (
    <div className={styles.WalletCard}>
      <div className={styles.CardItems}>
        <div className={styles.Img}>
          <img src={profileUrl} alt="profile" />
        </div>
        <div className={styles.Text}>
          <div className={styles.Wallet}>my wallet</div>
          <div className={styles.Address}>
            <div className={styles.AddressName}>0x398543592...792085485846</div>
            <CopyIcon fill="#ffffff" className={styles.CopyIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
