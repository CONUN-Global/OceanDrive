import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import styles from './SettingsCard.module.scss';

function SettingsCard({ children, title }: { children: React.ReactNode; title: string }) {
  const navigate = useNavigate();
  return (
    <div className={styles.Container}>
      <button className={styles.XBtn} onClick={() => navigate(-1)}>
        <Close />
      </button>
      <div className={styles.ContentContainer}>
        <h1 className={styles.Title}>{title}</h1>
        <div className={styles.ChildrenContainer}>{children}</div>
      </div>
    </div>
  );
}

export default SettingsCard;
