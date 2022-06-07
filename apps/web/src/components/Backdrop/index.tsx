import classNames from 'classnames';
import React from 'react';
import styles from './Backdrop.module.scss';
interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClear?: boolean;
}
function Backdrop({ setIsModalOpen, isModalOpen, isClear }: Props) {
  return <div onClick={() => setIsModalOpen(false)} className={classNames(isModalOpen ? styles.Open : styles.Closed, { [styles.Clear]: isClear })}></div>;
}

export default Backdrop;
