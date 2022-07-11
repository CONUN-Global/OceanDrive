import React, { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as BoxedIcon } from '../../../assets/icons/boxed-icon.svg';

import styles from './BottomBox.module.scss';

const BottomBox = () => {
  const [clicked, setClicked] = useState('published');

  return (
    <div className={styles.BottomBox}>
      <div className={styles.DescriptionTitle}>My Files</div>

      <div className={styles.DescriptionBox}>
        <div className={styles.DescriptionWords}>
          <div onClick={() => setClicked('published')} className={classNames(styles.DescriptionWord, { [styles.ClickedWord]: clicked === 'published' })}>
            Published (20)
          </div>
          <div onClick={() => setClicked('downloads')} className={classNames(styles.DescriptionWord, { [styles.ClickedWord]: clicked === 'downloads' })}>
            Downloads (20)
          </div>
          <div onClick={() => setClicked('personal')} className={classNames(styles.DescriptionWord, { [styles.ClickedWord]: clicked === 'personal' })}>
            Personal (20)
          </div>
        </div>

        <div className={styles.BoxedIcon}>
          <BoxedIcon />
        </div>
      </div>
    </div>
  );
};

export default BottomBox;
