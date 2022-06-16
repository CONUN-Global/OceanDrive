import React, { useCallback, useState } from 'react';

import TitleAndSearch from '../../components/TitleAndSearch';
import { useMutation } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import DragAndDrop from 'src/components/DragAndDrop';
import { UploadFile } from 'src/types';

import styles from './DropFile.module.scss';
import cuid from 'cuid';
import Button from 'src/components/Button';

const DropFile = () => {
  const [images, setImages] = useState<any[]>([]);

  const { mutateAsync: uploadFile } = useMutation(
    (file: any) =>
      window.api.uploadThumb({
        ...file,
        filePath: file?.path,
        fileName: file?.name,
        size: file?.size,
      }),
    {
      onSuccess: (e: any) => {
        console.log(e);

        if (e?.success) toast.success('File uploaded successful');
      },
    },
  );

  const onDrop = useCallback((acceptedFiles: any[]) => {
    console.log(acceptedFiles);
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();

      reader.onloadend = function (e: any) {
        setImages(prevState => [...prevState, { ...file, id: cuid(), src: e.target.result, filePath: e.target.result, result: reader.result }]);
      };

      reader.readAsDataURL(file);

      return file;
    });
  }, []);
  console.log(images);

  const handleSubmit = () => {
    images.forEach(image => {
      uploadFile(image);
    });
  };
  const [uploads, setUploads] = useState<UploadFile[]>([]);

  return (
    <div className={styles.PageContainer}>
      <ToastContainer />
      <TitleAndSearch>My Drive</TitleAndSearch>
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
      </div>
    </div>
  );
};

export default DropFile;
