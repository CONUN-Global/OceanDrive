import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';

import styles from './Lock.module.scss';
import Input from 'src/components/Input';

const demoPassword = ['cool', 'eh', 'yeah', 'i', 'think', 'so'];

const Lock = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState(false);

  //Check if the inputted password is the same as Demo password
  // If true, push through
  const checkValidity = () => {
    const trimmedVal = inputValue.trim().split(/\s+/).join(' ');
    if (trimmedVal == demoPassword.join(' ')) {
      navigate('/marketplace');
    } else {
      setError(true);
    }
  };

  const placeholderPhrase = 'Enter your Password or Seed Phrase';

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Container}>
        <div className={styles.ContentContainer}>
          <div className={styles.TitleContainer}>
            <div className={styles.Title}>Settings</div>
          </div>
          <div className={styles.WalletPhrase}>Enter your Ocean Drive password or wallet seed phrase to unlock Ocean Drive</div>
          <Input error={error} setError={setError} inputValue={inputValue} setInputValue={setInputValue} placeholder={placeholderPhrase} />
          <Button className={classNames(styles.Button, { [styles.ActivatedBtn]: inputValue.length > 0 })} onClick={checkValidity}>
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
