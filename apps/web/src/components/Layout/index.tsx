import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styles from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <div className={styles.Layout}>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}

export default Layout;
