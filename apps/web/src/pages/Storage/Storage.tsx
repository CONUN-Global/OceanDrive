import React, { useState } from 'react';
import Button from 'src/components/Button';

import { ReactComponent as PlusIcon } from 'src/assets/icons/plus-icon.svg';
import { ReactComponent as EllipseIcon } from 'src/assets/icons/ellipse-icon.svg';
import { ReactComponent as DownVectorIcon } from 'src/assets/icons/down-vector-icon.svg';
import { ReactComponent as UpArrowIcon } from 'src/assets/icons/up-arrow-icon.svg';
import { ReactComponent as DownArrowIcon } from 'src/assets/icons/darrow-icon.svg';
import { ReactComponent as ParrowIcon } from 'src/assets/icons/parrow-icon.svg';
import { ReactComponent as HeartIcon } from 'src/assets/icons/heart-icon.svg';
import { ReactComponent as TrackIcon } from 'src/assets/icons/track-icon.svg';

import { motion } from 'framer-motion';

import styles from './Storage.module.scss';

import MainBackground from 'src/components/DriveLayouts/Background';
import LeftSideLayer from 'src/components/DriveLayouts/LeftSide';
import RightSideLayer from 'src/components/DriveLayouts/RightSide';
import SidebarContent from 'src/components/DriveLayouts/LeftSide/SidebarContentLayout';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, translateY: '10' },
};

const Storage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');

  const sortByOption = (option: string) => {
    setClicked(option);
    setIsOpen(false);
  };

  return (
    <MainBackground>
      <LeftSideLayer>
        <SidebarContent>
          <div className={styles.DriveInfoContainer}>
            <div className={styles.MyDrivePlus}>
              <div className={styles.Title}>My Drive</div>
              <PlusIcon />
            </div>
            <div className={styles.DriveItem}>
              Track Meeting <TrackIcon />
            </div>
            <div className={styles.DriveItem}>
              Track Meeting <TrackIcon />
            </div>
          </div>
        </SidebarContent>
      </LeftSideLayer>

      <RightSideLayer title="My Drive">
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
                  {' '}
                  <UpArrowIcon style={{ width: '10px', marginBottom: '2px' }} />
                </span>
              ) : (
                <span>
                  {' '}
                  <DownVectorIcon style={{ width: '10px' }} />
                </span>
              )}
            </span>
          </div>
        </div>
        <motion.div className={styles.MainBySortDet} animate={isOpen ? 'open' : 'closed'} variants={variants}>
          <div className={styles.sortItems}>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('most-recent')}>
              <EllipseIcon /> Most Recent
            </motion.div>

            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('low-to-high')}>
              <DownArrowIcon /> Price (low to high)
            </motion.div>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('high-to-low')}>
              <ParrowIcon /> Price (high to low)
            </motion.div>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('most-popular')}>
              <HeartIcon /> Most Popular
            </motion.div>
          </div>
        </motion.div>

        <div className={styles.rectangle918}>
          <div className={styles.dragAndDrop}>
            <div className={styles.dr}>Drag and Drop</div>
            <div className={styles.dr} style={{ marginTop: '-7px' }}>
              or
            </div>
            <div>
              <Button className={styles.Button}>Browse</Button>
            </div>
            <div className={styles.UnlimitedSize}>Unlimitied Size Upload</div>
          </div>
        </div>

        <div className={styles.photosZero}>0 Photos - 0 MB</div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default Storage;
