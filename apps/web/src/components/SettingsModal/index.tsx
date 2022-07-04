import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';
import ChangePass from './ChangePass';
import Initial from './Initial';
import Key from './Key';
import Password from './Password';
import Seed from './Seed';
import styles from './Settings.module.scss';

function Settings() {
  const [currentPage, setCurrentPage] = useState<'Initial' | 'Seed' | 'ChangePass' | 'Key'>('Initial');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.PageContainer} onClick={() => dispatch(toggleSettings())}>
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
