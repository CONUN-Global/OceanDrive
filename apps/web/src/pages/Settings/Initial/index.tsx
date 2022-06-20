import React from 'react';
import Button from 'src/components/Button';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Initial.module.scss';

interface IPageProps {
  setCurrentPage: (arg: number) => void;
}

function Initial({ setCurrentPage }: IPageProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.Container}>
      <button className={styles.XBtn} onClick={() => navigate(-1)}>
        <Close />
      </button>
      <div className={styles.ContentContainer}>
        <div className={styles.TitleContainer}>
          <div className={styles.Title}>Settings</div>
        </div>
        <div className={styles.BtnContainer}>
          <Button className={styles.Button} onClick={() => setCurrentPage(1)}>
            View Seed Phrase
          </Button>
          <Button className={styles.Button} onClick={() => setCurrentPage(2)}>
            Change Password
          </Button>
          <Button className={styles.Button} onClick={() => setCurrentPage(3)}>
            Export Private Key
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Initial;
