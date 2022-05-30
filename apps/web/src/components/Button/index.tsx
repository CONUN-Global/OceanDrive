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
  isDisabled?: boolean;
}

function Button({ children, className, round, loading = false, variant = 'primary', spinner = '#FFF', isDisabled = false, ...props }: IButton) {
  return (
    <button disabled={isDisabled} className={classNames(styles.Button, styles[variant], { [styles.round]: round }, { [styles.disabled]: isDisabled }, className)} {...props}>
      {loading ? <SmallSpinner color={spinner} /> : children}
    </button>
  );
}

export default Button;
