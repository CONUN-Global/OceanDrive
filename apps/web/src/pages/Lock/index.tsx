import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ConunIcon } from '../../assets/icons/Conun-Icon.svg';
import Button from '../../components/Button';

import styles from './Lock.module.scss';
import Input from '../../components/Input';

const demoPassword = ['123'];

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
            <ConunIcon className={styles.Icon} />
            <div className={styles.Title}>OCEANDRIVE</div>
          </div>
          <div className={styles.Instructions}>Enter your OceanDrive password or wallet seed phrase to unlock OceanDrive</div>
          <form className={styles.InputAndBtn} onSubmit={e => e.preventDefault()}>
            <Input error={error} setError={setError} inputValue={inputValue} setInputValue={setInputValue} label={placeholderPhrase} />
            <Button className={classNames(styles.Button, { [styles.ActivatedBtn]: inputValue.length > 0 })} onClick={checkValidity}>
              Unlock
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Lock;
