import React, { useState } from 'react';
import ClickableTooltip from 'src/components/ClickableTooltip';
import { ReactComponent as CopyIcon } from '../../../assets/icons/copy-icon.svg';

import styles from './WalletCard.module.scss';

const profileUrl = require('../../../assets/images/Profile.png');

const WalletCard = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('0x398543592...792085485846');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };

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
            <ClickableTooltip copyText={'0x398543592...792085485846'}>
              <CopyIcon width={12} height={12} fill="#ffffff" />
            </ClickableTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
