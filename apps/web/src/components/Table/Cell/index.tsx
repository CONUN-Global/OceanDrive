import React from 'react';
import classNames from 'classnames';

import styles from './Cell.module.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

function Cell({ children, centered = false, className }: Props) {
  return (
    <div className={classNames(styles.CellContainer, className)}>
      <div className={classNames(styles.Cell, { [styles.centered]: centered }, className)}>{children}</div>
    </div>
  );
}
export default Cell;
