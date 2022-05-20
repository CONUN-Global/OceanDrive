import React, { ReactNode } from 'react';
import styles from './LeftSideLayer.module.scss';

const LeftSideLayer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.leftSideBar}>{children}</div>;
};

export default LeftSideLayer;
