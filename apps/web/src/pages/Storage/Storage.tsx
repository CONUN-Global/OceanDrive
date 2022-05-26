import cuid from 'cuid';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/darrow-icon.svg';
import { ReactComponent as DownVectorIcon } from '../../assets/icons/down-vector-icon.svg';
import { ReactComponent as EllipseIcon } from '../../assets/icons/ellipse-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-icon.svg';
import { ReactComponent as ParrowIcon } from '../../assets/icons/parrow-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-icon.svg';
import { ReactComponent as TrackIcon } from '../../assets/icons/track-icon.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up-arrow-icon.svg';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import DropZone from '../../components/DropZone/DropZone';
import styles from './Storage.module.scss';

const variants = {
  open: { opacity: 1, zIndex: 100 },
  closed: { opacity: 0, translateY: 10 },
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
    <MainBackground>
      <LeftSidebar>
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
      </LeftSidebar>

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
          <div className={styles.SortItemsContainer}>
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

        <DropZone onDrop={onDrop} accept={'image/*'} />
        <div style={{ position: 'absolute', top: '60%', left: '20%', width: '60%', display: 'flex', flexWrap: 'wrap', overflow: 'hidden', overflowY: 'hidden' }}>
          {images.map((image: any) => {
            console.log(image);
            return (
              <li key={image.id}>
                <img src={image.src} alt="nft-art-pic" style={{ width: '200px', height: '150px' }} />
              </li>
            );
          })}
        </div>

        <div className={styles.photosZero}>0 Photos - 0 MB</div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default Storage;
