import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';

import { ReactComponent as ClosedEyeBall } from '../../assets/icons/closed-eye-icon.svg';
import { ReactComponent as OpenEyeBall } from '../../assets/icons/open-eye-icon.svg';
import { ReactComponent as InputErrorIcon } from '../../assets/icons/input-error-icon.svg';

import styles from './Lock.module.scss';
import { check } from 'prettier';

const demoPassword = ['cool', 'eh', 'yeah', 'i', 'think', 'so'];

const Lock = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState<string>('');
  const [error, setError] = useState(false);
  const [eyeCondition, setEyeCondition] = useState('closed');

  const onChange = (e: any) => {
    setInputVal(e.target.value);
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

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Container}>
        <div className={styles.ContentContainer}>
          <div className={styles.TitleContainer}>
            <div className={styles.Title}>Settings</div>
          </div>

          <div className={styles.WalletPhrase}>Enter your Ocean Drive password or wallet seed phrase to unlock Ocean Drive</div>

          <div className={styles.InputPhrase}>
            <input
              className={classNames(styles.Input, { [styles.InputValColor]: inputVal.length > 0, [styles.ErrorColor]: error && inputVal })}
              value={inputVal}
              onChange={e => onChange(e)}
              type={eyeCondition === 'closed' || inputVal.length === 0 ? 'password' : 'text'}
              placeholder="Enter your Password or Seed Phrase"
            />
            <div className={styles.EyeBall}>
              {error && inputVal.length !== 0 && (
                <InputErrorIcon
                  onClick={() => {
                    setError(false);
                    setInputVal('');
                  }}
                  className={styles.EyeIcon}
                />
              )}
              {!error && eyeCondition === 'closed' && inputVal.length !== 0 && (
                <ClosedEyeBall
                  className={styles.EyeIcon}
                  onClick={() => {
                    if (inputVal.length > 0) setEyeCondition('open');
                  }}
                />
              )}
              {inputVal.length === 0 && (
                <ClosedEyeBall
                  className={styles.EyeIcon}
                  onClick={() => {
                    if (inputVal.length > 0) setEyeCondition('open');
                  }}
                />
              )}
              {!error && eyeCondition === 'open' && (
                <OpenEyeBall
                  className={styles.EyeIcon}
                  onClick={() => {
                    if (inputVal.length > 0) setEyeCondition('closed');
                  }}
                />
              )}
            </div>
          </div>

          {error && inputVal.length > 0 && <div className={styles.Error}>Provided password is incorrect.</div>}

          <Button className={classNames(styles.Button, { [styles.ActivatedBtn]: inputVal.length > 0 })} onClick={checkValidity}>
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
