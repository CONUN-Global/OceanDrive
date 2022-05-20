import React, { useEffect } from 'react';
import classNames from 'classnames';
import useToggle from '../../hooks/useToggle';
import styles from './Tag.module.scss';

interface ITag {
  name: string;
  className?: string;
  round?: boolean;
  length: number;
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
}

function Tag({ name, round, addItem, removeItem, length, className }: ITag) {
  const [toggle, toggleSwitch] = useToggle(false);

  useEffect(() => {
    if (toggle) {
      addItem(name);
    } else {
      removeItem(name);
    }
  }, [toggle]);

  const handleClick = () => {
    if (length == 12 && toggle) {
      toggleSwitch();
    }
    if (length < 12) {
      toggleSwitch();
    }
  };

  return (
    <div className={classNames(styles.Tag, { [styles.round]: round, [styles.clicked]: toggle }, className)} onClick={handleClick}>
      {name}
    </div>
  );
}

export default Tag;
