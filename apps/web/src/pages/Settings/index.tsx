import React, { useState } from 'react';
import ChangePass from './ChangePass';
import Initial from './Initial';
import Key from './Key';
import Password from './Password';
import Seed from './Seed';
import styles from './Settings.module.scss';
import SettingsCard from './SettingsCard';

function Settings() {
  const [currentPage, setCurrentPage] = useState<'Initial' | 'Seed' | 'ChangePass' | 'Key'>('Initial');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.PageContainer}>
      {showPassword && <Password setShowPassword={setShowPassword} />}

      {!showPassword &&
        {
          Initial: <Initial setCurrentPage={setCurrentPage} setShowPassword={setShowPassword} />,
          Seed: <Seed />,
          ChangePass: <ChangePass />,
          Key: <Key />,
        }[currentPage]}
    </div>
  );
}

export default Settings;
