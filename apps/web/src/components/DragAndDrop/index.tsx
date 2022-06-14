import cuid from 'cuid';
import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from 'react-query';
import Button from 'src/components/Button';
import styles from './DragAndDrop.module.scss';

const { api } = window;

const baseStyle = {
  borderWidth: 1.6,
  borderRadius: 10,
  borderColor: '#5f93f1',
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

function DragAndDrop({ children }: any) {
  const [images, setImages] = useState<any[]>([]);

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

  const onDrop = useCallback((acceptedFiles: any[]) => {
    ///To display  images
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setImages(prevState => [...prevState, { type: file.type, size: file.size, path: file.path, name: file.name, id: cuid(), src: e.target.result, filePath: e.target.result }]);
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

  const handleSubmit = () => {
    images.forEach(image => {
      uploadFile(image);
    });
  };

  return (
    <>
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
          {children}
          <div className={styles.DroppedImgContainer}>
            {images.map((image: any) => {
              return (
                <div key={image.id}>
                  <div>{image.name}</div>
                  {/* <img src={image.src} alt="nft-art-pic" style={{ width: '200px', height: '150px' }} /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default DragAndDrop;
