import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Confirm from './Confirm';

import styles from './Send.module.scss';

interface Inputs {
  [key: string]: string;
}

function Send() {
  const [inputInfo, setInputInfo] = useState<Inputs>({ input1: '', input2: '' });
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  function handleSubmit(e: React.FormEvent<any>) {
    e.preventDefault();
    // Check for errors -> Then push to next step
    setCurrentStep(prev => prev + 1);
  }

  return (
    <>
      {
        {
          // SHOW FORM ON STEP 1 /// SHOW CONFIRM COMPONENT ON STEP 2
          1: (
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
                    onChange={({ target }) => setInputInfo((prevState: any) => ({ ...prevState, input1: target.value }))}
                    value={inputInfo.input1}
                  />
                  {errors && <p className={styles.Warning}>Invalid address, please check your input again</p>}
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
                    onChange={({ target }) => setInputInfo((prevState: any) => ({ ...prevState, input2: target.value }))}
                    value={inputInfo.input2}
                  />
                  <p className={styles.Warning}>{errors && 'Insufficient Balance'}</p>
                </div>
              </div>
              <Button type="submit" className={styles.Button}>
                Next
              </Button>
            </form>
          ),
          2: <Confirm />,
        }[currentStep]
      }
    </>
  );
}

export default Send;
