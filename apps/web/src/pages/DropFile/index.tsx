import React, { useCallback, useState } from 'react';

import TitleAndSearch from '../../components/TitleAndSearch';
import { useMutation } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import DragAndDrop from 'src/components/DragAndDrop';
import { UploadFile } from 'src/types';

import styles from './DropFile.module.scss';
import cuid from 'cuid';

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
  const [uploads, setUploads] = useState([]);
  const [uploads, setUploads] = useState<UploadFile[]>([]);

  return (
    <div className={styles.PageContainer}>
      <ToastContainer />
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
