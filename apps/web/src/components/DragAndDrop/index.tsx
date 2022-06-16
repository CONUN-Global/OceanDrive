import cuid from 'cuid';
import React, { useCallback, useMemo, useState } from 'react';
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg';
import { useDropzone } from 'react-dropzone';
import { useMutation } from 'react-query';
import { UploadFile } from 'src/types';

import styles from './DragAndDrop.module.scss';

const { api } = window;

const baseStyle = {
  borderWidth: 1.6,
  borderRadius: 10,
  backgroundColor: '#EDF9FF',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

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
  children?: React.ReactNode;
}

function DragAndDrop({ data, setData, maxFiles = 0, maxSize = undefined, children }: IProps) {
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
        console.log(e);

        if (e?.success) alert('File uploaded successful');
      },
    },
  );

  const onDrop = useCallback((acceptedFiles: any[], rejectedFiles: any[]) => {
    rejectedFiles?.forEach(file => {
      file?.errors.forEach((err: any) => {
        switch (err.code) {
          case 'file-too-large':
            console.log(err.code);
            setErrors('File too large. Please select a smaller file.');
            break;
          case 'file-invalid-type':
            console.log(err.code);
            setErrors('This is an invalid file type. Please select a JPEG or PNG.');
            break;
          case 'too-many-files':
            console.log(err.code);
            setErrors('You have selected too many files. Please use only a single photo for the thumbnail.');
            break;
          default:
            setErrors('Something went wrong, please try again.');
        }
      });
    });
    ///To display  images
    acceptedFiles.map((file: any) => {
      console.log(file.type);
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setData((prevState: UploadFile[]) => [...prevState, { type: file.type, size: file.size, path: file.path, name: file.name, id: cuid(), src: e.target.result, filePath: e.target.result }]);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  const { getRootProps, isFocused, isDragAccept, isDragReject, getInputProps, open, isDragActive } = useDropzone({
    accept: {
      // MIME Type + [file extensions to accept]
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
      'image/*': ['.jpeg', '.png'],
      'application/zip': ['.zip'],
      'text/html': ['.html', '.htm'],
    },
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

  //   const handleSubmit = () => {
  //     data.forEach(image => {
  //       uploadFile(image);d
  //     });
  //   };

  return (
    <>
      <div {...getRootProps({ className: styles.Container, style })}>
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
