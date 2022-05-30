import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '../Button';

import styles from './DropZone.module.scss';

const baseStyle = {
  borderWidth: 1.6,
  borderRadius: 10,
  borderColor: '#5f93f1',
  borderStyle: 'dashed',
  backgroundColor: '#F7F7F7',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  // borderColor: '#2196f3',
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function Dropzone({ onDrop, accept }: any) {
  const { getRootProps, isFocused, isDragAccept, isDragReject, getInputProps, open, isDragActive } = useDropzone({
    accept,
    onDrop,
    noClick: true,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );
  // const files = acceptedFiles.map((file: any) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));
  return (
    <div className={styles.DropZoneContainer}>
      <div {...getRootProps({ className: styles.Container, style })}>
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
