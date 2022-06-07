import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import classNames from 'classnames';
import TitleAndSearch from 'src/components/TitleAndSearch';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import DropZone from '../../components/DropZone/DropZone';

import { ReactComponent as CopyIcon } from '../../assets/icons/copy-icon.svg';
import { ReactComponent as CyconIcon } from '../../assets/icons/cycon-icon.svg';

import styles from './Profile.module.scss';
import WalletCard from 'src/components/BalanceCards/WalletCard';
import BalanceCard from 'src/components/BalanceCards/BalanceCard';

const seedData = { balance: 598.0 };

const profileUrl = require('../../assets/images/Profile.png');
const profileUrl2 = require('../../assets/icons/heart-icon.svg');

const Profile = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TopContainer}>
        <h4 className={styles.Title}>MY BALANCE</h4>
        <div className={styles.Balance}>
          <div className={styles.TopItems}>
            <h3 className={styles.CoinType}>CYCON COIN</h3>
            <h3 className={styles.Total}>{seedData.balance.toFixed(2)} CYC</h3>
          </div>
          <div className={styles.BottomItems}>
            <button className={styles.BuyButton}>Buy</button>
            <div className={styles.BuyInfo}>(Goes to Bithumb)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
