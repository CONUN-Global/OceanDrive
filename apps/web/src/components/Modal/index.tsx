import React from 'react';
import classNames from 'classnames';
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
  isButtonAvailable?: boolean;
}
function Modal({ isModalOpen, children, title, desc, buttonText, handleConfirm, isButtonAvailable }: IModal) {
  console.log('isButtonAvailable', isButtonAvailable);
  return (
    <Card className={classNames(styles.Modal, { [styles.closed]: !isModalOpen })}>
      <div className={styles.Text}>
        <h6 className={styles.Title}> {title} </h6>
        {children}
        <p className={styles.Desc}>{desc}</p>
      </div>

      <Button round className={styles.ContinueButton} onClick={handleConfirm} isDisabled={!isButtonAvailable}>
        {buttonText}
      </Button>
    </Card>
  );
}
export default Modal;
