import React, { useState } from 'react';
import classNames from 'classnames';

import Send from './TransComponents/Send';
import Receive from './TransComponents/Receive';
import Transactions from './TransComponents/Transactions';

import BalanceCard from 'src/components/BalanceCards/BalanceCard';
import styles from './Wallet.module.scss';

function Wallet() {
  const Tabs = ['Transactions', 'Send', 'Receive'] as const;
  const [currentTab, setCurrentTab] = useState<typeof Tabs[number]>('Transactions');

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.TopContainer}>
            <BalanceCard />
          </div>
          <div className={styles.BottomContainer}>
            <h3 className={styles.Title}>MY ACTIVITY</h3>
            <div className={styles.SelectTabContainer}>
              {Tabs.map((tab, index) => (
                <div key={index} onClick={() => setCurrentTab(tab)} className={classNames(styles.Tab, { [styles.active]: currentTab === tab })}>
                  {tab}
                </div>
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
    </>
  );
}

export default Wallet;
