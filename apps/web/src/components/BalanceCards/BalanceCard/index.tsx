import React from 'react';
import classNames from 'classnames';

import { ReactComponent as CyconIcon } from '../../../assets/icons/cycon-icon.svg';

import styles from './BalanceCard.module.scss';

const BalanceCard = () => {
  return (
    <div className={classNames(styles.WalletCard, styles.BalanceCard)}>
      <div className={styles.CardItems}>
        <div className={styles.Img}>
          <CyconIcon width={46} height={46} />
        </div>
        <div className={styles.Text}>
          <div className={classNames(styles.Wallet2)}>cycon coin balance</div>
          <div className={styles.Address}>
            <div className={styles.AddressName2}>598.00 CYC</div>
          </div>
        </div>
        <div className={classNames(styles.CopyIcon2)}>Buy</div>
      </div>
    </div>
  );
};

export default BalanceCard;
