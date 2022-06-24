import React, { useState } from 'react';
import ClickableTooltip from 'src/components/ClickableTooltip';
import { ReactComponent as CopyIcon } from '../../../assets/icons/copy-icon.svg';
import { ReactComponent as Avatar } from '../../../assets/images/AvatarPlaceholder.svg';
import splitKey from 'src/helpers/splitKey';

import styles from './WalletCard.module.scss';
const walletID = '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo';

const WalletCard = () => {
  const shortenedID = splitKey(walletID, 10, 5);

  return (
    <div className={styles.WalletCard}>
      <div className={styles.CardItems}>
        <div className={styles.Avatar}>
          <Avatar />
        </div>
        <div className={styles.Text}>
          <div className={styles.Wallet}>my wallet</div>
          <div className={styles.Address}>
            <div className={styles.AddressName}>{shortenedID}</div>
            <ClickableTooltip copyText={walletID}>
              <CopyIcon fill="#ffffff" />
            </ClickableTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
