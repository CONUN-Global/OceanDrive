import React, { useState } from 'react';

import TitleAndSearch from '../../components/TitleAndSearch';
import DragAndDrop from 'src/components/DragAndDrop';

import styles from './DropFile.module.scss';

const DropFile = () => {
  const [uploads, setUploads] = useState([]);

  return (
    <div className={styles.PageContainer}>
      <TitleAndSearch>My Drive</TitleAndSearch>
      <div className={styles.PageContent}>
        <div className={styles.DropZoneContainer}>
          <DragAndDrop data={uploads} setData={setUploads}></DragAndDrop>
        </div>
        <div className={styles.photosZero}>0 Photos - 0 MB</div>
      </div>
    </div>
  );
};

export default DropFile;
