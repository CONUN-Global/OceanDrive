import classNames from 'classnames';
import React from 'react';
import styles from './Card.module.scss';

export interface ICard {
  variant?: 'primary' | 'secondary' | ' tertiary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}
function Card({ variant = 'primary', children, className, border }: ICard) {
  return <div className={classNames(styles.Card, styles[variant], className, { [styles.border]: border })}>{children}</div>;
}

export default Card;
