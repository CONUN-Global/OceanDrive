import React, { useState } from 'react';
import classNames from 'classnames';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';

import styles from './Profile.module.scss';
import WalletCard from 'src/components/BalanceCards/WalletCard';
import BalanceCard from 'src/components/BalanceCards/BalanceCard';

<<<<<<< HEAD
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
=======
import BottomBox from 'src/pages/Profile/BottomBox';

interface EventInterface {
  target: any;
}

const data = [
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC', txHash: 'ksdflklkds', copy: 'copy' },
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC', txHash: 'ksdflklkds', copy: 'copy' },
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC', txHash: 'ksdflklkds', copy: 'copy' },
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC', txHash: 'ksdflklkds', copy: 'copy' },
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC', txHash: 'ksdflklkds', copy: 'copy' },
];

const Profile = () => {
  return (
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>

      <RightSideLayer>
        <div className={styles.Container}>
          {/* TOP */}
          <div className={styles.BalanceCards}>
            <WalletCard />
            <BalanceCard />                
          </div>

          {/* BottomBox */}
          <div className={styles.BottomBox}>
            <BottomBox />
          </div>

          {/* Bottom Table */}
          <div className={styles.BottomTable}>
            <div className={styles.TableContainer}>
              <table className={styles.Table}>
                <thead>
                  <tr className={styles.TableRow}>
                    <th>Content Name</th>
                    <th>File Size</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>TX Hash</th>
                    <th>copy</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 &&
                    data.map((val: any, key: any) => {
                      
                      return (
                        <tr key={key} className={styles.TableRow2}>
                          <td>{val.transactionId}</td>
                          <td>{val.status}</td>
                          <td>{val.date}</td>
                          <td>{val.amount}</td>
                          <td>{val.txHash}</td>
                          <td>{val.copy}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
            </div>
          </div>
>>>>>>> bffd765... created table and box
        </div>
      </div>
    </div>
  );
};

export default Profile;
