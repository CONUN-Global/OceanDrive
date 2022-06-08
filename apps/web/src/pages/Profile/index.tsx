import React, { useState } from 'react';
import classNames from 'classnames';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';

import styles from './Profile.module.scss';
import WalletCard from 'src/components/BalanceCards/WalletCard';
import BalanceCard from 'src/components/BalanceCards/BalanceCard';

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
        </div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default Profile;
