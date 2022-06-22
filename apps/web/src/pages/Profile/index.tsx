import React, { useState } from 'react';
import styles from './Profile.module.scss';
import WalletCard from 'src/components/BalanceCards/WalletCard';
import BalanceCard from 'src/components/BalanceCards/BalanceCard';
import BottomTable from './BotttomTable';

import { ReactComponent as BoxedIcon } from '../../assets/icons/boxed-icon.svg';
import classNames from 'classnames';

const Profile = () => {
  const [clicked, setClicked] = useState<'published' | 'downloads' | 'personal'>('published');
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className={styles.Container}>
      {/* TOP */}
      <div className={styles.BalanceCards}>
        <WalletCard />
        <BalanceCard />
      </div>

      {/* BottomBox */}
      <div className={styles.BottomBoxContainer}>
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
              <BoxedIcon
                onClick={() => {
                  if (clicked === 'published') {
                    setShowGrid(!showGrid);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table */}
      <BottomTable clicked={clicked} showGrid={showGrid} />
    </div>
  );
};

export default Profile;
