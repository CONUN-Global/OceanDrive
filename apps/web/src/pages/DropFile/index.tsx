import React, { useState } from 'react';

import TitleAndSearch from '../../components/TitleAndSearch';
import DragAndDrop from 'src/components/DragAndDrop';
import { UploadFile } from 'src/types';

import styles from './DropFile.module.scss';
import Button from 'src/components/Button';

const DropFile = () => {
  const [uploads, setUploads] = useState<UploadFile[]>([]);

  return (
    <div className={styles.PageContainer}>
      {/* <TitleAndSearch>My Drive</TitleAndSearch>
      <div className={styles.DropZoneContainer}>
        <DragAndDrop data={uploads} setData={setUploads}>
          <div className={styles.Container}>
            <div className={styles.FileDropText}>
              Drag and Drop <br /> or
            </div>
            <Button type="button" className={styles.FileDropBtn}>
              Browse
            </Button>
            <div className={styles.Uploads}>Unimited Size Uploads</div>
          </div>
        </DragAndDrop>
      </div> */}
    </div>
  );
};

export default DropFile;
