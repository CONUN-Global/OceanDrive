import React, { useState } from 'react';
import Button from 'src/components/Button';

import styles from './Send.module.scss';

interface Inputs {
  [key: string]: string;
}

function Send() {
  const [inputInfo, setInputInfo] = useState<Inputs>({ input1: '', input2: '' });
  const [warnings, setWarnings] = useState({});

  function handleSubmit(e: React.FormEvent<any>) {
    e.preventDefault();
    console.log(inputInfo);
  }

  return (
    <form className={styles.Container} onSubmit={e => handleSubmit(e)}>
      <div className={styles.InputsContainer}>
        <div className={styles.InputBox}>
          <label className={styles.InputText} htmlFor="Receipt">
            Receipt Address
          </label>
          <input
            className={styles.Input}
            type="text"
            id="Receipt"
            placeholder="Enter a wallet address"
            onChange={({ target }) => setInputInfo(prevState => ({ ...prevState, input1: target.value }))}
            value={inputInfo.input1}
          />
          <p className={styles.Warning}>Invalid address, please check your input again</p>
        </div>
        <div className={styles.InputBox}>
          <label className={styles.InputText} htmlFor="Amount">
            Amount in CYC
          </label>
          <input
            className={styles.Input}
            type="text"
            id="Amount"
            placeholder="Enter an amount"
            onChange={({ target }) => setInputInfo(prevState => ({ ...prevState, input2: target.value }))}
            value={inputInfo.input2}
          />
          {warnings && <p className={styles.Warning}>Insufficient Balance</p>}
        </div>
      </div>
      <Button type="submit" className={styles.Button}>
        Next
      </Button>
    </form>
  );
}

export default Send;
