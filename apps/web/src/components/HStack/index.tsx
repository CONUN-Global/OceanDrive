import React from 'react';
import classNames from 'classnames';
import styles from './HStack.module.scss';

interface IHStack {
  children: React.ReactNode;
  className?: string;
}
function HStack({ children, className }: IHStack) {
  return <div className={classNames(styles.HStack, className)}>{children}</div>;
}
export default HStack;
