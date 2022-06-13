import cuid from 'cuid';
import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import { useMutation } from 'react-query';
import Button from 'src/components/Button';
import styles from '../../components/DropZone/DropZone.module.scss';

const { api } = window;

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
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function Settings() {
  const [images, setImages] = useState<any[]>([]);

  //UNUSED UNTIL WE MAKE API REQUEST
  //   const { mutateAsync: uploadFile } = useMutation(
  //     (file: any) =>
  //       api.uploadFile({
  //         ...file,
  //         filePath: file?.path,
  //         fileName: file?.name,
  //         size: file?.size,
  //       }),
  //     {
  //       onSuccess: (e: any) => {
  //         console.log(e);

  //         if (e?.success) alert('File uploaded successful');
  //       },
  //     },
  //   );

  const onDrop = useCallback((acceptedFiles: any[]) => {
    ///To display the images
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setImages(prevState => [...prevState, { ...file, id: cuid(), src: e.target.result, filePath: e.target.result }]);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  const { getRootProps, isFocused, isDragAccept, isDragReject, getInputProps, open, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
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

  //   const handleSubmit = () => {
  //     images.forEach(image => {
  //       uploadFile(image);
  //     });
  //   };

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
        </div>
      </div>
    </div>
  );
}

export default Settings;
