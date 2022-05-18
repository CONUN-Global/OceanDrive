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
    <table
      className={classNames(
        styles.TableContainer,
        {
          [styles.scrollable]: scrollable,
        },
        className,
      )}
    >
      {children}
    </table>
  );
}

export default Table;
