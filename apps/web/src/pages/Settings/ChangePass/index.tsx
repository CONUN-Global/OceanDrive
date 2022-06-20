import React from 'react';
import Button from 'src/components/Button';
import SettingsCard from '../SettingsCard';
import styles from './ChangePass.module.scss';

function ChangePass() {
  return (
    <SettingsCard title="Change Password">
      <div className={styles.Container}>
        <div className={styles.InputsContainer}>
          <input placeholder="Enter your current password" type="password" name="" id="" />
          <input placeholder="Enter a new password" type="password" name="" id="" />
          <input placeholder="Confirm your new password" type="password" name="" id="" />
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CancelButton}>
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
