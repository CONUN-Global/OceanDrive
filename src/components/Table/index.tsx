import React from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';

interface ITable {
  children: React.ReactNode;
  className?: string;
  scrollable?: boolean;
}

function Table({ children, className, scrollable }: ITable) {
  return (
    <div
      className={classNames(
        styles.TableContainer,
        {
          [styles.scrollable]: scrollable,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Table;
