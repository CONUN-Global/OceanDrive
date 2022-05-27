import React, { useState } from 'react';
import styles from './FilterBar.module.scss';
import { motion } from 'framer-motion';
import { ReactComponent as DownArrowIcon } from 'src/assets/icons/darrow-icon.svg';
import { ReactComponent as DownVectorIcon } from 'src/assets/icons/down-vector-icon.svg';
import { ReactComponent as EllipseIcon } from 'src/assets/icons/ellipse-icon.svg';
import { ReactComponent as HeartIcon } from 'src/assets/icons/heart-icon.svg';
import { ReactComponent as ParrowIcon } from 'src/assets/icons/parrow-icon.svg';

import { ReactComponent as UpArrowIcon } from 'src/assets/icons/up-arrow-icon.svg';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, translateY: 10 },
};

function FilterBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');

  const sortByOption = (option: string) => {
    setClicked(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.MainBySortBy} style={{ backgroundColor: isOpen ? '#80a0d433' : '#ffffff' }}>
        <div>Sort by </div>
        <div>
          {clicked === 'most-recent' && <EllipseIcon />}
          {clicked === 'low-to-high' && <DownArrowIcon />}
          {clicked === 'high-to-low' && <ParrowIcon />}
          {clicked === 'most-popular' && <HeartIcon />}

          <span
            className={styles.mostRecent}
            onClick={() => {
              setIsOpen(isOpen => !isOpen);
            }}
          >
            {clicked === 'most-recent' && 'Most Recent'}
            {clicked === 'low-to-high' && 'Price (low to high)'}
            {clicked === 'high-to-low' && 'Price (high to low)'}
            {clicked === 'most-popular' && 'Most Popular'}
            {isOpen ? (
              <span>
                <UpArrowIcon style={{ width: '10px', marginBottom: '2px' }} />
              </span>
            ) : (
              <span>
                <DownVectorIcon style={{ width: '10px' }} />
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
            <ParrowIcon /> Price (high to low)
          </motion.div>
          <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.SortListItem} onClick={() => sortByOption('most-popular')}>
            <HeartIcon /> Most Popular
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default FilterBar;
