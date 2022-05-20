import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import cuid from 'cuid';

import Button from 'src/components/Button';
import { TabNftIcon, PlusIcon, TrackIcon, UnionVectorIcon, EllipseIcon, DownVectorIcon, UpArrowIcon, DownArrowIcon, ParrowIcon, HeartIcon } from 'src/const';

import styles from './Storage.module.scss';

import GreyishBackground from 'src/components/MainBackground/MainBackground';
import LeftSideLayer from 'src/components/LeftSideLayer/LeftSideLayer';
import RightSideLayer from 'src/components/RightSideLayer/RightSideLayer';
import DropZone from 'src/components/DropZone/DropZone';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, traslateY: '10' },
};

interface EventInterface {
  target: any;
}

const Storage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('most-recent');
  const [images, setImages] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();
      reader.onload = function (e: EventInterface) {
        setImages(prevState => [...prevState, { id: cuid(), src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

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

        <DropZone onDrop={onDrop} accept={'image/*'} />
        <div style={{ position: 'absolute', top: '60%', left: '20%', width: '60%', display: 'flex', flexWrap: 'wrap', overflow: 'hidden', overflowY: 'hidden' }}>
          {images.map((image: any) => {
            console.log(image);
            return <li key={image.id}>
              <img src={image.src} alt="nft-art-pic" style={{width: '200px', height: '150px'}}/>
            </li>;
          })}
        </div>

        <div className={styles.photosZero}>0 Photoss 0MB</div>
      </RightSideLayer>
    </GreyishBackground>
  );
};

export default Storage;
