import React from 'react';
import classNames from 'classnames';

import styles from './Tag.module.scss';

interface ITag {
  children: React.ReactNode;
  className?: string;
  round?: boolean;
}

function Tag({ children, round, className }: ITag) {
  return <div className={classNames(styles.Tag, { [styles.round]: round }, className)}>{children}</div>;
}

export default Tag;
