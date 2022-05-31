import React from 'react';
import classNames from 'classnames';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './Modal.module.scss';

interface IModal {
  isModalOpen: boolean;
  children: React.ReactNode;
  title: string;
  desc: any;
  buttonText: string;
  handleConfirm: () => void;
  isButtonAvailable?: boolean;
  titleStyle?: any;
}
function Modal({ isModalOpen, children, title, titleStyle, desc, buttonText, handleConfirm, isButtonAvailable }: IModal) {
  console.log('isButtonAvailable', isButtonAvailable);
  return (
    <Card className={classNames(styles.Modal, { [styles.closed]: !isModalOpen })}>
      <div className={styles.Text}>
        <h6 className={styles.Title} style={titleStyle}> {title} </h6>
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
