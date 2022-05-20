import React, { ReactNode } from 'react';
import styles from './SidebarContentLayout.module.scss';

interface IPageProps {
  children?: ReactNode;
}

function SidebarContent({ children }: IPageProps) {
  return <div className={styles.SidebarLayout}>{children}</div>;
}

export default SidebarContent;
