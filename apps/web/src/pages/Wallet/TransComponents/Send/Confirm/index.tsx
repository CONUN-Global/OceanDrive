import React from 'react';
import Button from 'src/components/Button';
import styles from './Confirm.module.scss';

import { ReactComponent as SendIcon } from 'src/assets/icons/send.svg';

const seedData = {
  address: '83159875343845982754389897543983453634438',
  currency: 'CYCON COIN',
  amount: 100,
  fee: 0.001,
};

function Confirm() {
  return (
    <div className={styles.Container}>
      <div className={styles.InfoContainer}>
        <div>
          <h3 className={styles.Title}>RECIPIENT ADDRESS</h3>
          <div className={styles.Info}>{seedData.address}</div>
        </div>
        <div>
          <h3 className={styles.Title}>RECIPIENT CURRENCY</h3>
          <div className={styles.Info}>{seedData.currency}</div>
        </div>
        <div>
          <h3 className={styles.Title}>AMOUNT</h3>
          <div className={styles.Info}>{seedData.amount} CYC</div>
        </div>
        <div>
          <h3 className={styles.Title}>NETWORK FEE</h3>
          <div className={styles.Info}>{seedData.fee} CYC/KB</div>
        </div>
      </div>
      <Button>
        <SendIcon />
        SEND
      </Button>
    </div>
  );
}

export default Confirm;
