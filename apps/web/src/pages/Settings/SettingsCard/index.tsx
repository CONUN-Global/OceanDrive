import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import styles from './SettingsCard.module.scss';

function SettingsCard({ children, title, isLarge = false }: { children: React.ReactNode; title: string; isLarge?: boolean }) {
  const navigate = useNavigate();
  return (
    <div className={classNames(styles.Container, { [styles.LgContainer]: isLarge })}>
      <button className={styles.XBtnContainer} onClick={() => navigate(-1)}>
        <Close className={styles.XBtn} />
      </button>
      <div className={styles.ContentContainer}>
        <h1 className={styles.Title}>{title}</h1>
        <div className={styles.ChildrenContainer}>{children}</div>
      </div>
    </div>
  );
}

export default SettingsCard;
