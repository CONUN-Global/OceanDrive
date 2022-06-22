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

const conditions = { CLOSED: 'closed', OPEN: 'open', PASSWORD: 'password', TEXT: 'text' };

const Input = ({ error, inputVal, onChange, errorClick, placeholder }: InputProps) => {
  const { CLOSED, OPEN, PASSWORD, TEXT } = conditions;
  const [eyeCondition, setEyeCondition] = useState(CLOSED);

  return (
    <>
      <div className={styles.InputPhrase}>
        <input
          className={classNames(styles.Input, { [styles.InputValColor]: inputVal.length > 0, [styles.ErrorColor]: error && inputVal })}
          value={inputVal}
          onChange={e => onChange(e)}
          type={eyeCondition === CLOSED || inputVal.length === 0 ? PASSWORD : TEXT}
          placeholder={placeholder}
        />
        <div className={styles.EyeBall}>
          {error && inputVal.length !== 0 && <InputErrorIcon onClick={errorClick} className={styles.EyeIcon} />}
          {!error && eyeCondition === CLOSED && inputVal.length !== 0 && (
            <ClosedEyeBall
              className={styles.EyeIcon}
              onClick={() => {
                if (inputVal.length > 0) setEyeCondition(OPEN);
              }}
            />
          )}
          {inputVal.length === 0 && (
            <ClosedEyeBall
              className={styles.EyeIcon}
              onClick={() => {
                if (inputVal.length > 0) setEyeCondition(OPEN);
              }}
            />
          )}
          {!error && eyeCondition === OPEN && inputVal.length !== 0 && (
            <OpenEyeBall
              className={styles.EyeIcon}
              onClick={() => {
                if (inputVal.length > 0) setEyeCondition(CLOSED);
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
