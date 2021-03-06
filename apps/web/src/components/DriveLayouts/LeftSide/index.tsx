import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSettings } from '../../../redux/settingsSlice';

import { ReactComponent as RectIcon } from '../../../assets/icons/rect.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icons/upload.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/Sidebar/Settings.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/Sidebar/Logout.svg';
import { ReactComponent as MarketIcon } from '../../../assets/icons/Sidebar/Market.svg';
import { ReactComponent as PublishIcon } from '../../../assets/icons/Sidebar/Publish.svg';
import { ReactComponent as WalletIcon } from '../../../assets/icons/Sidebar/Wallet.svg';
import { ReactComponent as Avatar } from '../../../assets/images/Placeholder_Avatar.svg';
import Button from '../../Button';

import classNames from 'classnames';
import styles from './LeftSidebar.module.scss';

function LeftSide({ children }: { children?: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const linkContent = [
    { title: 'marketplace', icon: <MarketIcon /> },
    { title: 'wallet', icon: <WalletIcon /> },
    { title: 'publish', icon: <PublishIcon /> },
  ];
  const dispatch = useDispatch();

  return (
    <div className={styles.leftSideBar}>
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContainer}>
          <div onClick={() => navigate('/profile')} className={classNames(styles.Avatar, { [styles.AvatarBorder]: pathname === '/profile' })}>
            <Avatar />
          </div>
          <div className={styles.LinksContainer} style={{ position: 'relative' }}>
            {linkContent.map((linkItem, index) => {
              return (
                <div key={index} className={styles.LinksAndIcon}>
                  {pathname.startsWith(`/${linkItem.title}`) && <RectIcon />}
                  <div></div>
                  <div className={classNames(styles.Link, { [styles.active]: pathname.startsWith(`/${linkItem.title}`) })} onClick={() => navigate(`/${linkItem.title}`)}>
                    <div className={styles.SVGBox}>{linkItem.icon}</div>
                    <div className={styles.Text}>{linkItem.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Button className={classNames(styles.UploadButton, { [styles.activeButton]: pathname.startsWith('/dropfile') })} onClick={() => navigate('/dropfile')}>
            <UploadIcon />
            <div className={styles.UploadText}>Drop File</div>
          </Button>

          <div className={styles.UtilityButtons}>
            <div onClick={() => dispatch(toggleSettings())} className={styles.Link}>
              <div className={styles.SVGBox}>
                <SettingsIcon />
              </div>
              <div className={styles.Text}>Settings</div>
            </div>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <LogoutIcon />
              </div>
              <div className={styles.Text} onClick={() => navigate('/lock')}>
                Lock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
