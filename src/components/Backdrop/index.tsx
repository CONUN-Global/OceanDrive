import React from 'react';
import styles from './Backdrop.module.scss';
interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Backdrop({ setIsModalOpen, isModalOpen }: Props) {
  return <div onClick={() => setIsModalOpen(false)} className={isModalOpen ? styles.Open : styles.Closed}></div>;
}

export default Backdrop;
