import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import TitleAndSearch from 'src/components/TitleAndSearch';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import DropZone from '../../components/DropZone/DropZone';
import styles from './Profile.module.scss';

interface EventInterface {
  target: any;
}

const seedData = { balance: 598.0 };

const Profile = () => {
  return (
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>

      <RightSideLayer>
        <div className={styles.Container}>
          {/* TOP */}
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
      </RightSideLayer>
    </MainBackground>
  );
};

export default Profile;
