import React, { useState } from 'react';
import classNames from 'classnames';

import Send from './TransComponents/Send';
import Receive from './TransComponents/Receive';
import Transactions from './TransComponents/Transactions';

import BalanceCard from '../../components/BalanceCards/BalanceCard';
import styles from './Wallet.module.scss';
import TabButton from 'src/components/TabButton';

function Wallet() {
  const Tabs = ['Transactions', 'Send', 'Receive'] as const;
  type Label = typeof Tabs[number];

  const [currentTab, setCurrentTab] = useState<Label>('Transactions');

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.TopContainer}>
          <BalanceCard />
        </div>
        <div className={styles.BottomContainer}>
          <h3 className={styles.Title}>MY ACTIVITY</h3>
          <div className={styles.SelectTabContainer}>
            {Tabs.map((tab, index) => (
              <TabButton content={tab} setCurrentTab={setCurrentTab} currentTab={currentTab} key={index} />
            ))}
          </div>
          <div className={styles.InfoContainer}>
            {
              {
                Send: <Send />,
                Transactions: <Transactions />,
                Receive: <Receive />,
              }[currentTab]
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
