import React from 'react';

import { ReactComponent as OceanDriveIcon } from 'src/assets/icons/Ocean-Drive.svg';

import styles from './SplashScreen.module.scss';

function SplashScreen() {
  return (
    <div className={styles.PageContainer}>
      <OceanDriveIcon />
    </div>
  );
}

export default SplashScreen;
