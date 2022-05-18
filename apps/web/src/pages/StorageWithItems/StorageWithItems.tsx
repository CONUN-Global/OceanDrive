import React, { useState } from 'react';
import Button from 'src/components/Button';

import { TabNftIcon, PlusIcon, TrackIcon, UnionVectorIcon, EllipseIcon, UpArrowIcon, DownArrowIcon, ParrowIcon, HeartIcon } from 'src/const';

import { motion } from 'framer-motion';

import styles from './StorageWithItems.module.scss';

import MainBackground from 'src/components/MainBackground/MainBackground';
import LeftSideLayer from 'src/components/LeftSideLayer/LeftSideLayer';
import RightSideLayer from 'src/components/RightSideLayer/RightSideLayer';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, traslateY: '10' },
};

const StorageWithItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');

  const sortByOption = (option: string) => {
    setClicked(option);
    setIsOpen(false);
  };

  return (
    <MainBackground>
      <LeftSideLayer>
        <div className={styles.Profile}></div>

        <div className={styles.Frame698}>
          <div className={styles.myDrivePlus}>
            <div className={styles.mDrive}>My Drive</div>
            <PlusIcon />
          </div>

          <div className={styles.trackMeeting}>
            Track Meeting <TrackIcon />
          </div>

          <div className={styles.trackMeeting}>
            Track Meeting <TrackIcon />
          </div>
        </div>

        <div className={styles.contentWalletButton}>
          <Button className={styles.walletButton}>Upload a File</Button>
        </div>

        <div className={styles.lockF}>
          Lock <UnionVectorIcon />
        </div>
      </LeftSideLayer>

      <RightSideLayer title="My Drive" IconComponent={<TabNftIcon />}>
        <div className={styles.MainBySortBy} style={{ backgroundColor: isOpen ? '#80a0d433' : '#ffffff' }}>
          <div>Sort by </div>
          <div>
            {/* {clicked === 'most-recent' ? <IEllipseIcon /> : 'low-to-high' ? <IDArrowIcon /> : <IHeartIcon />} */}
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
                  <DownArrowIcon style={{ width: '10px' }} />
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

        {/* top showcase item with some specs */}
        <div className={styles.showcaseItem}>
          <img
            className={styles.itemPic}
            src="https://images.unsplash.com/photo-1641204312330-f50670fec3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="itemPicture"
          />
          <div className={styles.ItemSpecs}>
            <p className={styles.P1}>Twisting_lights_11.jpg</p>
            <p className={styles.P2}>Uploaded 4/2/2022</p>
            <p className={styles.P3}>3 KB</p>
          </div>
        </div>

        <div className={styles.rectangle918}></div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default StorageWithItems;
