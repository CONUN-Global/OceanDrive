import React from 'react';
import classNames from 'classnames';
import { ObjectType } from '../../../types/index';
import styles from './DropdownItem.module.scss';

interface Props {
  item: ObjectType;
  className?: string;
  selectItem: React.Dispatch<React.SetStateAction<ObjectType>>;
}
function DropdownItem({ item, selectItem, className }: Props) {
  return (
    <li className={classNames(styles.DropdownItem, className)} onClick={() => selectItem(item)}>
      {item.method}
    </li>
  );
}

export default DropdownItem;
