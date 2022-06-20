import classNames from 'classnames';
import React, { useState } from 'react';
import Button from 'src/components/Button';
import SettingsCard from '../SettingsCard';
import styles from './Password.module.scss';

const subHeading = 'Never disclose your password. We don’t have access to your password, and will not be able to restore it.';
const userPassword = '123';

function Password({ setShowPassword }: { setShowPassword: (arg: boolean) => void }) {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(false);

  function handleChange(e: any) {
    if (password === '') setError(false);
    setPassword(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (password !== userPassword) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      ///PASSWORD IS CORRECT!
      setShowPassword(false);
    }
  }

  return (
    <SettingsCard title="Password">
      <form className={styles.PageContainer} onSubmit={handleSubmit}>
        <span className={styles.SubHeading}>{subHeading}</span>
        <div className={styles.InputContainer}>
          <input className={classNames(styles.Input, { [styles.InputError]: error })} placeholder="Enter password" type="password" name="password" id="password" onChange={handleChange} />
          <div className={styles.ErrorContainer}>{error && <div className={styles.Error}>Provided password is incorrect.</div>}</div>
        </div>
        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.Button}>
            Continue
          </Button>
        </div>
      </form>
    </SettingsCard>
  );
}

export default Password;
