import React, { useCallback, useMemo, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { useMutation } from 'react-query';
import cuid from 'cuid';
import moment from 'moment';
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg';
import { UploadFile } from '../../types';
import { SIZE_ERR, COUNT_ERR, INVALID_ERR, DEFAULT_ERR } from './constants';

import styles from './DragAndDrop.module.scss';

const { api } = window;

const focusedStyle = {
  backgroundColor: '#EDF9FF',
};

const acceptStyle = {
  backgroundColor: '#dbffec',
};

const rejectStyle = {
  backgroundColor: '#ffd8d8',
};

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
  maxFiles?: number;
  maxSize?: number | undefined;
  imgOnly?: boolean;
  children?: React.ReactNode;
  accept?: any;
  bgColor?: string;
}

function DragAndDrop({ bgColor, accept, data, setData, maxFiles = 0, maxSize = undefined, imgOnly = false, children }: IProps) {
  const baseStyle = {
    borderWidth: 1.6,
    borderRadius: 10,
    backgroundColor: bgColor ? bgColor : '#EDF9FF',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const [errors, setErrors] = useState<string>('');

  //UNUSED UNTIL WE MAKE API REQUEST
  const { mutateAsync: uploadFile } = useMutation(
    (file: any) =>
      api.uploadFile({
        ...file,
        filePath: file?.path,
        fileName: file?.name,
        size: file?.size,
      }),
    {
      onSuccess: (e: any) => {
        if (e?.success) alert('File uploaded successful');
      },
    },
  );

  const onDrop = useCallback((acceptedFiles: any[], rejectedFiles: any[]) => {
    rejectedFiles?.forEach(file => {
      file?.errors.forEach((err: any) => {
        switch (err.code) {
          case SIZE_ERR.CODE:
            setErrors(SIZE_ERR.MSG);
            break;
          case INVALID_ERR.CODE:
            setErrors(INVALID_ERR.MSG);
            break;
          case COUNT_ERR.CODE:
            setErrors(COUNT_ERR.MSG);
            break;
          default:
            setErrors(DEFAULT_ERR.MSG);
        }
      });
    });
    ///To display  images
    acceptedFiles.map((file: any) => {
      const fdate = moment(file.lastModifiedDate).format('MM.DD.YYYY hh:mm a');
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setData((prevState: UploadFile[]) => [
          ...prevState,
          { name: file.name, size: file.size, date: fdate, type: file.type, path: file.path, id: cuid(), src: e.target.result, filePath: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  const { getRootProps, isFocused, isDragAccept, isDragReject, getInputProps, open, isDragActive } = useDropzone({
    accept,
    onDrop,
    noClick: true,
    maxSize: maxSize,
    maxFiles: maxFiles,
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

  return (
    <>
      <div {...getRootProps({ style, className: styles.Container })}>
        <input {...getInputProps()} />
        <div onClick={open} className={styles.ContentContainer}>
          {isDragActive ? (
            <div className={styles.DragContainer}>
              <UploadIcon />
            </div>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </>
  );
}
export default DragAndDrop;
