import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as SettingsIcon } from 'src/assets/icons/Sidebar/Settings.svg';
import { ReactComponent as HostIcon } from 'src/assets/icons/Sidebar/Host.svg';
import { ReactComponent as LogoutIcon } from 'src/assets/icons/Sidebar/Logout.svg';
import { ReactComponent as MarketIcon } from 'src/assets/icons/Sidebar/Market.svg';
import { ReactComponent as PublishIcon } from 'src/assets/icons/Sidebar/Settings.svg';
import { ReactComponent as WalletIcon } from 'src/assets/icons/Sidebar/Wallet.svg';

import placeholderImg from '../../../assets/images/Avatar.png';
import Button from '../../Button';

import styles from './LeftSidebar.module.scss';

import ToolTip from 'src/components/Tooltip';

const LeftSidebar = ({ children }: { children?: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.leftSideBar}>
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContainer}>
          <img src={placeholderImg} className={styles.Avatar} />
          {/* {children} */}
          <div className={styles.LinksContainer}>
            <div className={styles.Link} onClick={() => navigate(`/marketplace/`)}>
              <div className={styles.SVGBox}>
                <MarketIcon />
              </div>
              <div className={styles.Text}>Marketplace</div>
            </div>
            <div className={styles.Link} onClick={() => navigate(`/storage/`)}>
              <div className={styles.SVGBox}>
                <HostIcon />
              </div>
              <div className={styles.Text}>Storage</div>
            </div>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <WalletIcon />
              </div>
              <div className={styles.Text}>Wallet</div>
            </div>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <PublishIcon />
              </div>
              <div className={styles.Text}>Publish</div>
            </div>
          </div>
        </div>
        <div>
          <ToolTip delay={100} content="Upload any file" direction="Bottom">
            <Button className={styles.UploadButton}>Upload a File</Button>
          </ToolTip>
          <div className={styles.UtilityButtons}>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <LogoutIcon />
              </div>
              <div className={styles.Text}>Logout</div>
            </div>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <SettingsIcon />
              </div>
              <div className={styles.Text}>Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

// onClick={() => navigate(`/marketplace/${collection}/${id}`)}
