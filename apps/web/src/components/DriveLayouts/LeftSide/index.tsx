import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as RectIcon } from '../../../assets/icons/rect.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icons/upload.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/Sidebar/Settings.svg';
import { ReactComponent as HostIcon } from '../../../assets/icons/Sidebar/Host.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/Sidebar/Logout.svg';
import { ReactComponent as MarketIcon } from '../../../assets/icons/Sidebar/Market.svg';
import { ReactComponent as PublishIcon } from '../../../assets/icons/Sidebar/Publish.svg';
import { ReactComponent as WalletIcon } from '../../../assets/icons/Sidebar/Wallet.svg';

import placeholderImg from '../../../assets/images/Avatar2.png';
import Button from '../../Button';

import styles from './LeftSidebar.module.scss';

import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/authSlice';

function LeftSide({ children }: { children?: ReactNode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const avatarBorder = pathname === '/profile' ? '2.5px solid #5f93f1' : 'none';

  const linkContent = [
    { title: 'marketplace', icon: <MarketIcon /> },
    { title: 'wallet', icon: <WalletIcon /> },
    { title: 'publish', icon: <PublishIcon /> },
    { title: 'host', icon: <HostIcon /> },
  ];

  const handleLogout = () => dispatch(logout());

  return (
    <div className={styles.leftSideBar}>
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContainer}>
          <img style={{ border: avatarBorder }} onClick={() => navigate('/profile')} src={placeholderImg} className={styles.Avatar} />
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
          <Button className={styles.UploadButton}>
            <UploadIcon />
            <div className={styles.UploadText}>Drop File</div>
          </Button>

          <div className={styles.UtilityButtons}>
            <div className={styles.Link}>
              <div className={styles.SVGBox}>
                <SettingsIcon />
              </div>
              <div className={styles.Text}>Settings</div>
            </div>
            <div className={styles.Link} onClick={handleLogout}>
              <div className={styles.SVGBox}>
                <LogoutIcon />
              </div>
              <div className={styles.Text}>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
