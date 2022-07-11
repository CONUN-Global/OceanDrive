import React, { useState } from 'react';
import styles from './FilterBar.module.scss';
import { motion } from 'framer-motion';
import { ReactComponent as DownArrowIcon } from 'src/assets/icons/down-arrow-icon.svg';
import { ReactComponent as DownVectorIcon } from 'src/assets/icons/down-vector-icon.svg';
import { ReactComponent as EllipseIcon } from 'src/assets/icons/ellipse-icon.svg';
import { ReactComponent as HeartIcon } from 'src/assets/icons/heart-icon.svg';
import { ReactComponent as UpArrow } from 'src/assets/icons/up-arrow-icon.svg';
import { ReactComponent as UpCaret } from 'src/assets/icons/up-caret-icon.svg';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, translateY: 10 },
};

function FilterBar() {
  const arr1 = ['most-recent', 'low-to-high', 'high-to-low', 'most-popular'];
  // eslint-disable-next-line react/jsx-key
  const arr2 = [<EllipseIcon />, <DownArrowIcon />, <UpArrow />, <HeartIcon />];
  const arr3 = ['Most Recent', 'Price (low to high)', 'Price (high to low)', 'Most Popular'];

  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');

  const sortByOption = (option: string) => {
    setClicked(option);
    setIsOpen(false);
  };

  const loop1 = utilFunc(arr1, arr2, clicked);
  const loop2 = utilFunc(arr1, arr3, clicked);

  return (
    <div>
      <div className={styles.MainBySortBy} style={{ backgroundColor: isOpen ? '#80a0d433' : '#ffffff' }}>
        <div>Sort by </div>
        <div>
          {loop1}
          <span
            className={styles.mostRecent}
            onClick={() => {
              setIsOpen(isOpen => !isOpen);
            }}
          >
            {loop2}
            {isOpen ? (
              <span>
                <UpCaret className={styles.UpCaret} />
              </span>
            ) : (
              <span>
                <DownVectorIcon className={styles.DownVectorIcon} />
              </span>
            )}
          </span>
        </div>
      </div>
      <motion.div initial={false} className={styles.MainBySortDet} animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <div className={styles.SortItemsContainer} style={{ display: isOpen ? '' : 'none' }}>
          <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.SortListItem} onClick={() => sortByOption('most-recent')}>
            <EllipseIcon /> Most Recent
          </motion.div>

          <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.SortListItem} onClick={() => sortByOption('low-to-high')}>
            <DownArrowIcon /> Price (low to high)
          </motion.div>
          <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.SortListItem} onClick={() => sortByOption('high-to-low')}>
            <UpArrow /> Price (high to low)
          </motion.div>
          <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.SortListItem} onClick={() => sortByOption('most-popular')}>
            <HeartIcon /> Most Popular
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const utilFunc = (array1: any, array2: any, word: string) => {
  for (const el of array1) {
    if (el === word) {
      return array2[array1.indexOf(el)];
    }
  }
};

export default FilterBar;
