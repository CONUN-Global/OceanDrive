import React from 'react';
import { useDropzone } from 'react-dropzone';

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
      <div {...getRootProps({ className: styles.container })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? <p className="dropzone-content">Release to drop the files here</p> : <p className="dropzone-content">Drag and drop some files here, or click to select files</p>}
          <button type="button" onClick={open} className="btn">
            Click to select files
          </button>
        </div>
      </div>
      {/* <aside>
        <ul>file - {files}</ul>
      </aside> */}
    </div>
  );
}
export default Dropzone;
