import React from 'react';

import { ReactComponent as OceanDriveIcon } from '../../assets/icons/OceanStorage-icon.svg';

import styles from './SplashScreen.module.scss';

function SplashScreen() {
  return (
    <div className={styles.PageContainer}>
      <OceanDriveIcon />
    </div>
  );
}

export default SplashScreen;
