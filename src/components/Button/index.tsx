import React from 'react';
import classNames from 'classnames';

import SmallSpinner from '../SmallSpinner';

import styles from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  round?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  spinner?: string;
}

function Button({ children, className, round, loading = false, variant = 'primary', spinner = '#FFF', ...props }: IButton) {
  return (
    <button className={classNames(styles.Button, styles[variant], { [styles.round]: round }, className)} {...props}>
      {loading ? <SmallSpinner color={spinner} /> : children}
    </button>
  );
}

export default Button;
