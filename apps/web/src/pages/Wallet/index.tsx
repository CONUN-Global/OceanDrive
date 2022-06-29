import React, { useState } from 'react';
import classNames from 'classnames';

import Send from './TransComponents/Send';
import Receive from './TransComponents/Receive';
import Transactions from './TransComponents/Transactions';

import BalanceCard from '../../components/BalanceCards/BalanceCard';
import styles from './Wallet.module.scss';

function Wallet() {
  const [currentTab, setCurrentTab] = useState<'Send' | 'Transactions' | 'Receive'>('Transactions');
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.TopContainer}>
            <BalanceCard />
          </div>
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
  );
}

export default Wallet;
