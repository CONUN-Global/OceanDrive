import React from 'react';
import styles from './SettingsCard.module.scss';

function SettingsCard({ children }: { children: any }) {
  return <div className={styles.PageContainer}>{children}</div>;
}

export default SettingsCard;
