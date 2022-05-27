import React from 'react';
import classNames from 'classnames';
import styles from './Toast.module.scss';

interface IToast {
  showToast: boolean;
  message: string;
}
function Toast({ showToast, message }: IToast) {
  return (
    <div className={classNames(styles.Toast, { [styles.show]: showToast })}>
      <p>{message}</p>
    </div>
  );
}

export default Toast;
