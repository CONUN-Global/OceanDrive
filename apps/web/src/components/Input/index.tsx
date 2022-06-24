import classNames from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as ClosedEyeBall } from '../../assets/icons/closed-eye-icon.svg';
import { ReactComponent as OpenEyeBall } from '../../assets/icons/open-eye-icon.svg';
import { ReactComponent as InputErrorIcon } from '../../assets/icons/input-error-icon.svg';

import styles from './Input.module.scss';

interface InputProps {
  error: boolean;
  setError: (arg: boolean) => void;
  inputValue: string;
  setInputValue: (arg: string) => void;
  placeholder?: string;
  errMessage?: string;
}

function Input({ error, setError, inputValue, setInputValue, placeholder, errMessage = 'Provided password is incorrect.' }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    setTimeout(() => {
      if (inputValue.length === 0) {
        setError(false);
      }
    });
  };

  const clearInput = () => {
    setError(false);
    setInputValue('');
  };

  return (
    <div className={styles.InputContainer}>
      <input
        className={classNames(styles.Input, { [styles.InputValColor]: inputValue.length > 0, [styles.ErrorColor]: error && inputValue })}
        value={inputValue}
        onChange={e => handleChange(e)}
        type={!isVisible || inputValue.length === 0 ? 'password' : 'text'}
        placeholder={placeholder}
      />
      <div className={styles.EyeBall}>
        {error && inputValue.length !== 0 && <InputErrorIcon onClick={clearInput} className={styles.EyeIcon} />}
        {!error && !isVisible && inputValue.length !== 0 && (
          <ClosedEyeBall
            className={styles.EyeIcon}
            onClick={() => {
              if (inputValue.length > 0) setIsVisible(true);
            }}
          />
        )}
        {inputValue.length === 0 && (
          <ClosedEyeBall
            className={styles.EyeIcon}
            onClick={() => {
              if (inputValue.length > 0) setIsVisible(true);
            }}
          />
        )}
        {!error && isVisible && inputValue.length !== 0 && (
          <OpenEyeBall
            className={styles.EyeIcon}
            onClick={() => {
              if (inputValue.length > 0) setIsVisible(false);
            }}
          />
        )}
      </div>
      {error && <div className={styles.Error}>{errMessage}</div>}
    </div>
  );
}

export default Input;
