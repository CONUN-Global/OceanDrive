import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import TitleAndSearch from '../../components/TitleAndSearch';
import DropZone from '../../components/DropZone/DropZone';
import styles from './Publish.module.scss';
import DriveLayout from 'src/components/DriveLayouts';

interface EventInterface {
  target: any;
}

const Publish = () => {
  const [images, setImages] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();
      reader.onload = function (e: EventInterface) {
        setImages(prevState => [...prevState, { id: cuid(), src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <DriveLayout>
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
    </DriveLayout>
  );
};

export default Publish;
