import React from 'react';
import styles from './Backdrop.module.scss';
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Backdrop({ setIsOpen }: Props) {
  return <div onClick={() => setIsOpen(false)} className={styles.Backdrop}></div>;
}

export default Backdrop;
