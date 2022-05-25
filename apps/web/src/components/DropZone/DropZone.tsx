import React from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '../Button';

import styles from './DropZone.module.scss';

function Dropzone({ onDrop, accept }: any) {
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    accept,
    onDrop,
    noClick: true,
  });
  // const files = acceptedFiles.map((file: any) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));
  return (
    <div className={styles.DropZoneContainer}>
      <div {...getRootProps({ className: styles.Container })}>
        <input {...getInputProps()} />
        <div className={styles.ContentContainer}>
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className={styles.Text}>
              Drag and drop <br /> or
            </p>
          )}
          <Button type="button" onClick={open}>
            Browse
          </Button>
        </div>
      </div>
      {/* <aside>
        <ul>file - {files}</ul>
      </aside> */}
    </div>
  );
}
export default Dropzone;
