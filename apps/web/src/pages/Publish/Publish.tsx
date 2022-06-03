import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import TitleAndSearch from '../../components/TitleAndSearch';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-icon.svg';
import { ReactComponent as TrackIcon } from '../../assets/icons/track-icon.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up-arrow-icon.svg';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import DropZone from '../../components/DropZone/DropZone';
import styles from './Publish.module.scss';
import { useMutation } from 'react-query';
import Button from 'src/components/Button';

interface EventInterface {
  target: any;
}
const { api } = window;

const Publish = () => {
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
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>

      <RightSideLayer>
        <div className={styles.PageContainer}>
          <TitleAndSearch>My Drive</TitleAndSearch>
          <DropZone onDrop={onDrop} accept={'image/*'} />
          <div>
            {images.map((image: any) => {
              return (
                <li key={image.id}>
                  <img src={image.src} alt="nft-art-pic" style={{ width: '200px', height: '150px' }} />
                </li>
              );
            })}
          </div>
          {/* For testing upload files , TODO: need to make design for submit button */}
          <Button onClick={handleSubmit}>Submit</Button>
          <div className={styles.photosZero}>0 Photos - 0 MB</div>
        </div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default Publish;
