import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import TitleAndSearch from '../../components/TitleAndSearch';
import DropZone from '../../components/DropZone/DropZone';
import styles from './DropFile.module.scss';
import { useMutation } from 'react-query';
import Button from 'src/components/Button';

interface EventInterface {
  target: any;
}
const { api } = window;

const DropFile = () => {
  const [images, setImages] = useState<any[]>([]);

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

  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();

      reader.onload = function (e: EventInterface) {
        setImages(prevState => [...prevState, { ...file, id: cuid(), src: e.target.result, filePath: e.target.result }]);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  const handleSubmit = () => {
    images.forEach(image => {
      uploadFile(image);
    });
  };

  return (
    <div className={styles.PageContainer}>
      <TitleAndSearch>My Drive</TitleAndSearch>
      <DropZone onDrop={onDrop} accept={'image/*'} />
      <div className={styles.DroppedImgContainer}>
        {images.map((image: any) => {
          console.log(image);
          return (
            <div key={image.id}>
              <img src={image.src} alt="nft-art-pic" style={{ width: '200px', height: '150px' }} />
            </div>
          );
        })}
      </div>
      <div className={styles.photosZero}>0 Photos - 0 MB</div>
    </div>
  );
};

export default DropFile;
