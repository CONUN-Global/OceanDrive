import React, { useState } from 'react';

import styles from './Send.module.scss';

function Send() {
  const [inputInfo, setInputInfo] = useState({});

  return (
    <div className={styles.Container}>
      <div className={styles.InputBox}>
        <label className={styles.InputText} htmlFor="Receipt">
          Receipt Address
        </label>
        <input className={styles.Input} type="text" name="Receipt" id="Receipt" placeholder="Enter a wallet address" />
      </div>
      <div className={styles.InputBox}>
        <label className={styles.InputText} htmlFor="Amount">
          Amount in CYC
        </label>
        <input className={styles.Input} type="text" name="Amount" id="Amount" placeholder="Enter an amount" />
      </div>
      <button>Next</button>
    </div>
  );
}

export default Send;
