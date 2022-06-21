import React from 'react';
import Button from 'src/components/Button';
import SettingsCard from '../SettingsCard';
import { useNavigate } from 'react-router-dom';
import styles from './ChangePass.module.scss';

function ChangePass() {
  const navigate = useNavigate();
  return (
    <SettingsCard title="Change Password">
      <div className={styles.Container}>
        <div className={styles.InputsContainer}>
          <input placeholder="Enter your current password" type="password" name="" id="" />
          <input placeholder="Enter a new password" type="password" name="" id="" />
          <input placeholder="Confirm your new password" type="password" name="" id="" />
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CancelButton} onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="secondary" className={styles.Button}>
            Change
          </Button>
        </div>
      </div>
    </SettingsCard>
  );
}

export default ChangePass;
