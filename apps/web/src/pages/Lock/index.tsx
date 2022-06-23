import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';

import { ReactComponent as ClosedEyeBall } from '../../assets/icons/closed-eye-icon.svg';
import { ReactComponent as OpenEyeBall } from '../../assets/icons/open-eye-icon.svg';
import { ReactComponent as InputErrorIcon } from '../../assets/icons/input-error-icon.svg';

import styles from './Lock.module.scss';
import { check } from 'prettier';
import Input from 'src/components/Input/Input';

const demoPassword = ['cool', 'eh', 'yeah', 'i', 'think', 'so'];

const Lock = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState<string>('');
  const [error, setError] = useState(false);

  const onChange = (ev: any) => {
    setInputVal(ev.target.value);
    setTimeout(() => {
      if (inputVal.length === 0) {
        setError(false);
      }
    });
  };

  const checkValidity = () => {
    const trimmedVal = inputVal.trim().split(/\s+/).join(' ');
    if (trimmedVal == demoPassword.join(' ')) {
      navigate('/marketplace');
    } else {
      setError(true);
    }
  };

  const errorClick = () => {
    setError(false);
    setInputVal('');
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

          <Input error={error} inputVal={inputVal} onChange={onChange} errorClick={errorClick} placeholder={placeholderPhrase} />

          <Button className={classNames(styles.Button, { [styles.ActivatedBtn]: inputVal.length > 0 })} onClick={checkValidity}>
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
