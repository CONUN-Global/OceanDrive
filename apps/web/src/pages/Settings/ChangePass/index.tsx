import React, { useState } from 'react';
import Button from '../../../components/Button';
import SettingsCard from '../SettingsCard';
import { useNavigate } from 'react-router-dom';
import styles from './ChangePass.module.scss';
import Input from '../../../components/Input';
import useValidate from '../../../hooks/useValidateNewPassword';

// Store users current password
const userPassword = '123';

interface IErrorMessages {
  current: string;
  newError: string;
  confirmError: string;
}

function ChangePass() {
  const navigate = useNavigate();
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
    navigate(-1);
  }
  return (
    <SettingsCard title="Change Password" isLarge={true}>
      <form className={styles.Container} onSubmit={handleSubmit}>
        <div className={styles.InputsContainer}>
          <Input placeholder="Enter your current password" setInputValue={setCurrentPass} inputValue={currentPass} error={error} setError={setError} errMessage={errorMessages.current} />
          <Input placeholder="Enter a new password" setInputValue={setNewPass} inputValue={newPass} error={error} setError={setError} errMessage={errorMessages.newError} />
          <Input placeholder="Confirm your new password" setInputValue={setConfirmPass} inputValue={confirmPass} error={error} setError={setError} errMessage={errorMessages.confirmError} />
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CancelButton} onClick={() => navigate(-1)}>
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
