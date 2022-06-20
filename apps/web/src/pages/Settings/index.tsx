import React, { useState } from 'react';
import OnboardingCard from 'src/components/OnboardingCard';
import Initial from './Initial';
import styles from './Settings.module.scss';

function Settings() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className={styles.PageContainer}>
      <Initial setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Settings;
