import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface ICard {
  variant?: 'primary' | 'secondary' | ' tertiary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}
function Card({ variant = 'primary', children, className }: ICard) {
  return <div className={classNames(styles.Card, styles[variant], className)}>{children}</div>;
}

export default Card;
