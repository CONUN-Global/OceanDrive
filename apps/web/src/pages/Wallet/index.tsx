import React, { useState } from 'react';

import classNames from 'classnames';
import Send from './TransComponents/Send';
import Receive from './TransComponents/Receive';
import Transactions from './TransComponents/Transactions';

import DriveLayout from 'src/components/DriveLayouts';
import styles from './Wallet.module.scss';

const seedData = { balance: 598.0 };

function Wallet() {
  const [currentTab, setCurrentTab] = useState<'Send' | 'Transactions' | 'Receive'>('Transactions');
  return (
    <DriveLayout>
      <>
        <div className={styles.Container}>
          {/* TOP */}
          <div className={styles.Content}>
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
            {/* BOTTOM */}
            <div className={styles.BottomContainer}>
              <div className={styles.SelectTabContainer}>
                <div className={classNames(styles.Tab, { [styles.active]: currentTab === 'Transactions' })} onClick={() => setCurrentTab('Transactions')}>
                  Transactions
                </div>
                <div className={classNames(styles.Tab, { [styles.active]: currentTab === 'Send' })} onClick={() => setCurrentTab('Send')}>
                  Send
                </div>
                <div className={classNames(styles.Tab, { [styles.active]: currentTab === 'Receive' })} onClick={() => setCurrentTab('Receive')}>
                  Receive
                </div>
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
    </DriveLayout>
  );
}

export default Wallet;
