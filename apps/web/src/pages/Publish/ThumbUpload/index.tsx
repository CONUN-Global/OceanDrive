import React from 'react';
import { UploadFile } from 'src/types';
import styles from './ThumbUpload.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[] | any) => void;
}

function ThumbUpload({ data, setData }: IProps) {
  return (
    <div className={styles.Container}>
      <button className={styles.XBtn} onClick={() => setData([])}>
        X
      </button>
      <img className={styles.Image} src={data[0].src} alt="nft-art-pic" />
    </div>
  );
}

export default ThumbUpload;
