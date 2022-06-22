import React from 'react';
import Button from 'src/components/Button';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Initial.module.scss';

interface IPageProps {
  setCurrentPage: (arg: 'Initial' | 'Seed' | 'Key' | 'ChangePass') => void;
  setShowPassword: (arg: boolean) => void;
}

function Initial({ setCurrentPage, setShowPassword }: IPageProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.Container}>
      <button className={styles.XBtnContainer} onClick={() => navigate(-1)}>
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
          <Button
            className={styles.Button}
            onClick={() => {
              setCurrentPage('ChangePass');
              setShowPassword(true);
            }}
          >
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
