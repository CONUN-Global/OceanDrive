import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Button from '../../components/Button';
import LeftSideLayer from '../../components/LeftSideLayer/LeftSideLayer';
import GreyishBackground from '../../components/MainBackground/MainBackground';
import RightSideLayer from '../../components/RightSideLayer/RightSideLayer';
import {
  DownArrowIcon,
  DownVectorIcon,
  EllipseIcon,
  HeartIcon,
  ParrowIcon,
  PlusIcon,
  TabNftIcon,
  TrackIcon,
  UnionVectorIcon,
  UpArrowIcon
} from '../../const';
import styles from './Storage.module.scss';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, traslateY: '10' }
};

const Storage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');

  const sortByOption = (option: string) => {
    setClicked(option);
    setIsOpen(false);
  };

  return (
    <GreyishBackground>
      <LeftSideLayer>
        <div className={styles.Profile}></div>

        <div className={styles.Frame698}>
          <div className={styles.MyDrivePlus}>
            <div className={styles.MDrive}>My Drive</div>
            <PlusIcon />
          </div>

          <div className={styles.TrackMeeting}>
            Track Meeting <TrackIcon />
          </div>

          <div className={styles.TrackMeeting}>
            Track Meeting <TrackIcon />
          </div>
        </div>

        <div className={styles.ContentWalletButton}>
          <Button className={styles.WalletButton}>Upload a File</Button>
        </div>

        <div className={styles.lockF}>
          Lock <UnionVectorIcon />
        </div>
      </LeftSideLayer>

      <RightSideLayer title="My Drive" IconComponent={<TabNftIcon />}>
        <div
          className={styles.MainBySortBy}
          style={{ backgroundColor: isOpen ? '#80a0d433' : '#ffffff' }}
        >
          <div>Sort by </div>
          <div>
            {clicked === 'most-recent' && <EllipseIcon />}
            {clicked === 'low-to-high' && <DownArrowIcon />}
            {clicked === 'high-to-low' && <ParrowIcon />}
            {clicked === 'most-popular' && <HeartIcon />}

            <span
              className={styles.mostRecent}
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
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
        <motion.div
          className={styles.MainBySortDet}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div className={styles.sortItems}>
            <motion.div
              whileHover={{ backgroundColor: '#80a0d433' }}
              className={styles.mItem}
              onClick={() => sortByOption('most-recent')}
            >
              <EllipseIcon /> Most Recent
            </motion.div>

            <motion.div
              whileHover={{ backgroundColor: '#80a0d433' }}
              className={styles.mItem}
              onClick={() => sortByOption('low-to-high')}
            >
              <DownArrowIcon /> Price (low to high)
            </motion.div>
            <motion.div
              whileHover={{ backgroundColor: '#80a0d433' }}
              className={styles.mItem}
              onClick={() => sortByOption('high-to-low')}
            >
              <ParrowIcon /> Price (high to low)
            </motion.div>
            <motion.div
              whileHover={{ backgroundColor: '#80a0d433' }}
              className={styles.mItem}
              onClick={() => sortByOption('most-popular')}
            >
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

        <div className={styles.photosZero}>0 Photoss 0MB</div>
      </RightSideLayer>
    </GreyishBackground>
  );
};

export default Storage;
