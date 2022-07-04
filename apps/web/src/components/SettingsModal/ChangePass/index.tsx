import React, { useState } from 'react';
import Button from '../../Button';
import SettingsCard from '../SettingsCard';
import styles from './ChangePass.module.scss';
import Input from '../../Input';
import useValidate from '../../../hooks/useValidateNewPassword';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';

// Store users current password
const userPassword = '123';

interface IErrorMessages {
  current: string;
  newError: string;
  confirmError: string;
}

function ChangePass() {
  const dispatch = useDispatch();
  // Input state (x3)
  const [currentPass, setCurrentPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');

  // Error message object
  const [errorMessages, setErrorMessages] = useState<IErrorMessages>({ current: '', newError: '', confirmError: '' });
  // Show error (Border styling & Error messages)
  const [error, setError] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    const validatedErrors = useValidate(userPassword, currentPass, newPass, confirmPass);

    if (validatedErrors.current !== '' || validatedErrors.confirmError !== '' || validatedErrors.newError !== '') {
      setErrorMessages(validatedErrors);
      setError(true);
      return;
    }

    setError(false);
    dispatch(toggleSettings());
  }

  return (
    <SettingsCard title="Change Password" isLarge={true}>
      <form className={styles.Container} onSubmit={handleSubmit}>
        <div className={styles.InputsContainer}>
          <Input label="Enter your current password" setInputValue={setCurrentPass} inputValue={currentPass} error={error} setError={setError} errMessage={errorMessages.current} />
          <Input label="Enter a new password" setInputValue={setNewPass} inputValue={newPass} error={error} setError={setError} errMessage={errorMessages.newError} />
          <Input label="Confirm your new password" setInputValue={setConfirmPass} inputValue={confirmPass} error={error} setError={setError} errMessage={errorMessages.confirmError} />
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CancelButton} onClick={() => dispatch(toggleSettings())}>
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className={styles.Button}>
            Change
          </Button>
        </div>
      </form>
    </SettingsCard>
  );
}

export default ChangePass;
