import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import styles from './SettingsCard.module.scss';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';

function SettingsCard({ children, title, isLarge = false }: { children: React.ReactNode; title: string; isLarge?: boolean }) {
  const dispatch = useDispatch();
  return (
    <div onClick={e => e.stopPropagation()} className={classNames(styles.Container, { [styles.LgContainer]: isLarge })}>
      <button className={styles.XBtnContainer} onClick={() => dispatch(toggleSettings())}>
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
