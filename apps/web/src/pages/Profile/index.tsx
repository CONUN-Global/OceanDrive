import React, { useState } from 'react';
import styles from './Profile.module.scss';
import WalletCard from '../../components/BalanceCards/WalletCard';
import BalanceCard from '../../components/BalanceCards/BalanceCard';
import BottomTable from './BottomTable';

import { ReactComponent as BoxedIcon } from '../../assets/icons/boxed-icon.svg';
import TabButton from 'src/components/TabButton';

const Profile = () => {
  const Tabs = ['Published', 'Downloads', 'Personal'] as const;
  type Label = typeof Tabs[number];

  const [clicked, setClicked] = useState<Label>('Published');
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className={styles.Container}>
      <div className={styles.BalanceCards}>
        <WalletCard />
        <BalanceCard />
      </div>
      <div className={styles.BottomBoxContainer}>
        <div className={styles.BottomBox}>
          <div className={styles.DescriptionTitle}>My Files</div>

          <div className={styles.DescriptionBox}>
            <div className={styles.DescriptionWords}>
              {Tabs.map((tab, index) => (
                <TabButton key={index} setCurrentTab={setClicked} currentTab={clicked} content={tab} />
              ))}
            </div>

            {clicked === 'Published' && (
              <div className={styles.BoxedIcon}>
                <BoxedIcon width={18} height={18} onClick={() => setShowGrid(!showGrid)} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom Table */}
      <BottomTable clicked={clicked.toLowerCase()} showGrid={showGrid} />
    </div>
  );
};

export default Profile;
