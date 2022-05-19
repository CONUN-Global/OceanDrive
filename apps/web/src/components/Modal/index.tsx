import React from 'react';
import classNames from 'classnames';
// import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './Modal.module.scss';

interface IModal {
  isModalOpen: boolean;
  children: React.ReactNode;
  title: string;
  desc: string;
  buttonText: string;
  handleConfirm: () => void;
}
function Modal({ isModalOpen, children, title, desc, buttonText, handleConfirm }: IModal) {
  // const navigate = useNavigate();
  return (
    <Card className={classNames(styles.Modal, { [styles.closed]: !isModalOpen })}>
      <div className={styles.Text}>
        <h6 className={styles.Title}> {title} </h6>
        {children}
        <p className={styles.Desc}>{desc}</p>
      </div>

      <Button round className={styles.ContinueButton} onClick={handleConfirm}>
        {buttonText}
      </Button>
    </Card>
  );
}
export default Modal;
