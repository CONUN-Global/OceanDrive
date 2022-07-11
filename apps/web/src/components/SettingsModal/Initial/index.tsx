import React from 'react';
import Button from '../../Button';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import styles from './Initial.module.scss';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';

interface IPageProps {
  setCurrentPage: (arg: 'Initial' | 'Seed' | 'Key' | 'ChangePass') => void;
  setShowPassword: (arg: boolean) => void;
}

function Initial({ setCurrentPage, setShowPassword }: IPageProps) {
  const dispatch = useDispatch();
  return (
    <div className={styles.Container} onClick={e => e.stopPropagation()}>
      <button className={styles.XBtnContainer} onClick={() => dispatch(toggleSettings())}>
        <Close className={styles.XBtn} />
      </button>
      <div className={styles.ContentContainer}>
        <div className={styles.TitleContainer}>
          <div className={styles.Title}>Settings</div>
        </div>
        <div className={styles.BtnContainer}>
          <Button
            className={styles.Button}
            onClick={() => {
              setCurrentPage('Seed');
              setShowPassword(true);
            }}
          >
            View Seed Phrase
          </Button>
          <Button className={styles.Button} onClick={() => setCurrentPage('ChangePass')}>
            Change Password
          </Button>
          <Button
            className={styles.Button}
            onClick={() => {
              setCurrentPage('Key');
              setShowPassword(true);
            }}
          >
            Export Private Key
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Initial;
