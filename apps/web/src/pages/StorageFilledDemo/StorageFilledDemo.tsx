import React, { useState } from 'react';
import Button from 'src/components/Button';

import { ReactComponent as TabNFtIcon } from '../../assets/icons/tabNFT-icon.svg';
import { ReactComponent as IPlusIcon } from '../../assets/icons/i-plus-icon.svg';
import { ReactComponent as ITrackIcon } from '../../assets/icons/i-track-icon.svg';
import { ReactComponent as IUnionVectorIcon } from '../../assets/icons/i-union-vector-icon.svg';
import { ReactComponent as IEllipseIcon } from '../../assets/icons/i-ellipse-icon.svg';
import { ReactComponent as IDownVectorIcon } from '../../assets/icons/i-down-vector-icon.svg';
import { ReactComponent as IUpArrowIcon } from '../../assets/icons/i-up-arrow-icon.svg';
import { ReactComponent as IDArrowIcon } from '../../assets/icons/i-darrow-icon.svg';
import { ReactComponent as IPArrowIcon } from '../../assets/icons/i-parrow-icon.svg';
import { ReactComponent as IHeartIcon } from '../../assets/icons/i-heart-icon.svg';

import { motion } from 'framer-motion';

import styles from './StorageFilledDemo.module.scss';

import GreyishBackground from 'src/components/Storage-Page-Components/GreyishBackground/GreyishBackgroundLayer';
import LeftSideLayer from 'src/components/Storage-Page-Components/LeftSideLayer/LeftSideLayer';
import RightSideLayer from 'src/components/Storage-Page-Components/RightSideLayer/RightSideLayer';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, traslateY: '10' },
};

// .itemPic2 {

// }

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
          <div className={styles.myDrivePlus}>
            <div className={styles.mDrive}>My Drive</div>
            <IPlusIcon />
          </div>

          <div className={styles.trackMeeting}>
            Track Meeting <ITrackIcon />
          </div>

          <div className={styles.trackMeeting}>
            Track Meeting <ITrackIcon />
          </div>
        </div>

        <div className={styles.contentWalletButton}>
          <Button className={styles.walletButton}>Upload a File</Button>
        </div>

        <div className={styles.lockF}>
          Lock <IUnionVectorIcon />
        </div>
      </LeftSideLayer>

      <RightSideLayer title="My Drive" IconComponent={<TabNFtIcon />}>
        <div className={styles.MainBySortBy} style={{ backgroundColor: isOpen ? '#80a0d433' : '#ffffff' }}>
          <div>Sort by </div>
          <div>
            {/* {clicked === 'most-recent' ? <IEllipseIcon /> : 'low-to-high' ? <IDArrowIcon /> : <IHeartIcon />} */}
            {clicked === 'most-recent' && <IEllipseIcon />}
            {clicked === 'low-to-high' && <IDArrowIcon />}
            {clicked === 'high-to-low' && <IPArrowIcon />}
            {clicked === 'most-popular' && <IHeartIcon />}

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
                  <IUpArrowIcon style={{ width: '10px', marginBottom: '2px' }} />
                </span>
              ) : (
                <span>
                  {' '}
                  <IDownVectorIcon style={{ width: '10px' }} />
                </span>
              )}
            </span>
          </div>
        </div>
        <motion.div className={styles.MainBySortDet} animate={isOpen ? 'open' : 'closed'} variants={variants}>
          <div className={styles.sortItems}>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('most-recent')}>
              <IEllipseIcon /> Most Recent
            </motion.div>

            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('low-to-high')}>
              <IDArrowIcon /> Price (low to high)
            </motion.div>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('high-to-low')}>
              <IPArrowIcon /> Price (high to low)
            </motion.div>
            <motion.div whileHover={{ backgroundColor: '#80a0d433' }} className={styles.mItem} onClick={() => sortByOption('most-popular')}>
              <IHeartIcon /> Most Popular
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
    </GreyishBackground>
  );
};

export default Storage;
