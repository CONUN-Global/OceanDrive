import React from 'react';
import Button from 'src/components/Button';
import SettingsCard from '../SettingsCard';
import styles from './ChangePass.module.scss';

function ChangePass() {
  return (
    <SettingsCard title="Change Password">
      <div className={styles.BtnContainer}>
        <Button variant="secondary" className={styles.Button}>
          Continue
        </Button>
      </div>
    </SettingsCard>
  );
}

export default ChangePass;
