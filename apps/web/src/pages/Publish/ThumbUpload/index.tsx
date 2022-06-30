import React from 'react';
import { UploadFile } from '../../../types';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import styles from './ThumbUpload.module.scss';

interface IProps {
  data: UploadFile[];
  setData: (arg: UploadFile[]) => void;
}

function ThumbUpload({ data, setData }: IProps) {
  return (
    <div className={styles.Container}>
      <button className={styles.XBtnContainer} onClick={() => setData([])}>
        <Close className={styles.XBtn} />
      </button>
      <img className={styles.Image} src={data[0].src} alt="nft-art-pic" />
    </div>
  );
}

export default ThumbUpload;
