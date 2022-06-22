import React, { useState } from 'react';
import Button from 'src/components/Button';
import Input from '../../../components/Input';

import SettingsCard from '../SettingsCard';
import styles from './Password.module.scss';

const subHeading = 'Never disclose your password. We don’t have access to your password, and will not be able to restore it.';
const userPassword = '123';

function Password({ setShowPassword }: { setShowPassword: (arg: boolean) => void }) {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (inputValue !== userPassword) {
      setError(true);
    } else {
      setShowPassword(false);
    }
  }

  return (
    <SettingsCard title="Password">
      <form className={styles.PageContainer} onSubmit={handleSubmit}>
        <span className={styles.SubHeading}>{subHeading}</span>
        <div className={styles.InputContainer}>
          <Input placeholder="Enter password" setInputValue={setInputValue} inputValue={inputValue} error={error} setError={setError} />
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
