import classNames from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as ClosedEyeBall } from '../../assets/icons/closed-eye-icon.svg';
import { ReactComponent as OpenEyeBall } from '../../assets/icons/open-eye-icon.svg';
import { ReactComponent as InputErrorIcon } from '../../assets/icons/input-error-icon.svg';

import styles from './Input.module.scss';

interface InputProps {
  error?: boolean;
  inputVal: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorClick?: () => void;
  placeholder?: string;
}

const Input = ({error, inputVal, onChange, errorClick, placeholder}: InputProps) => {
  const [eyeCondition, setEyeCondition] = useState('closed');

  return (
    <>
      <div className={styles.InputPhrase}>
        <input
          className={classNames(styles.Input, { [styles.InputValColor]: inputVal.length > 0, [styles.ErrorColor]: error && inputVal })}
          value={inputVal}
          onChange={e => onChange(e)}
          type={eyeCondition === 'closed' || inputVal.length === 0 ? 'password' : 'text'}
          placeholder={placeholder}
        />
        <div className={styles.EyeBall}>
          {error && inputVal.length !== 0 && (
            <InputErrorIcon
              onClick={errorClick}
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
          {!error && eyeCondition === 'open' && inputVal.length !== 0 && (
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
    </>
  );
};

export default Input;
