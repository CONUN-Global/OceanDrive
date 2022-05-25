import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as OceanDriveIcon } from '../../assets/icons/OceanStorage-icon.svg';

import styles from './SplashScreen.module.scss';

function SplashScreen({ path }: { path: string }) {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate(path);
  };
  useEffect(() => {
    setTimeout(redirectPage, 2000);
  }, []);

  return (
    <div className={styles.PageContainer}>
      <OceanDriveIcon />
    </div>
  );
}

export default SplashScreen;
