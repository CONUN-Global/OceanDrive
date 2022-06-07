import React, { useCallback, useState } from 'react';
import cuid from 'cuid';
import classNames from 'classnames';
import TitleAndSearch from 'src/components/TitleAndSearch';
import MainBackground from '../../components/DriveLayouts/Background';
import LeftSidebar from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import DropZone from '../../components/DropZone/DropZone';

import { ReactComponent as CopyIcon } from '../../assets/icons/copy-icon.svg';
import { ReactComponent as CyconIcon } from '../../assets/icons/cycon-icon.svg';

import styles from './Profile.module.scss';
import WalletCard from 'src/components/BalanceCards/WalletCard';
import BalanceCard from 'src/components/BalanceCards/BalanceCard';

interface EventInterface {
  target: any;
}

const seedData = { balance: 598.0 };

const profileUrl = require('../../assets/images/Profile.png');
const profileUrl2 = require('../../assets/icons/heart-icon.svg');

const Profile = () => {
  return (
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>

      <RightSideLayer>
        <div className={styles.Container}>

          {/* TOP */}
          <div className={styles.BalanceCards}>
            <WalletCard />
            <BalanceCard />
          </div>

          {/* Bottom */}
          <div className={styles.BottomBox}>BottomBox</div>
        </div>
      </RightSideLayer>
    </MainBackground>
  );
};

export default Profile;
