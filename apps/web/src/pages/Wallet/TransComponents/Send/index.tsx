import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Confirm from './Confirm';
import { motion } from 'framer-motion';

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

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div transition={{ type: 'tween' }} initial="hidden" animate="visible" variants={variants}>
      {
        {
          // SHOW FORM ON STEP 1 /// SHOW CONFIRM COMPONENT ON STEP 2
          1: (
            <form className={styles.Container} onSubmit={e => handleSubmit(e)}>
              <div className={styles.SizingContainer}>
                <div className={styles.InputsContainer}>
                  <div className={styles.InputBox}>
                    <label className={styles.InputText} htmlFor="Receipt">
                      Recipient Address
                    </label>
                    <input
                      className={styles.Input}
                      type="text"
                      id="Receipt"
                      placeholder="Enter a wallet address"
                      onChange={({ target }) => setInputInfo((prevState: any) => ({ ...prevState, input1: target.value }))}
                      value={inputInfo.input1}
                    />
                    {errors > 0 && <p className={styles.Warning}>Invalid address, please check your input again</p>}
                  </div>
                  <div className={styles.InputBox}>
                    <label className={styles.InputText} htmlFor="Amount">
                      Amount
                    </label>
                    <input
                      className={styles.Input}
                      type="text"
                      id="Amount"
                      placeholder="Enter an amount"
                      onChange={({ target }) => setInputInfo((prevState: any) => ({ ...prevState, input2: target.value }))}
                      value={inputInfo.input2}
                    />
                    <p className={styles.Warning}>{errors > 0 && 'Insufficient Balance'}</p>
                  </div>
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
    </motion.div>
  );
}

export default Send;
