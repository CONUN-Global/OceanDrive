import React, { ReactNode } from 'react';

import styles from './MainBackground.module.scss';

const GreyishBackground = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GreyishBackground;
