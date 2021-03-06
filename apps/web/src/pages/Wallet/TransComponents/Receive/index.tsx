import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';
import { ReactComponent as CopyIcon } from '../../../../assets/icons/copy-icon.svg';
import Tooltip from '../../../../components/Tooltip';

import { motion } from 'framer-motion';

import styles from './Receive.module.scss';

const seedData = {
  walletAddress: '0x879879879879877349509245092854439',
};

function copyText() {
  navigator.clipboard.writeText(seedData.walletAddress);
}

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function Receive() {
  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <h3 className={styles.Title}>My Wallet Address</h3>
        <div className={styles.ImageContainer}>
          <img src={QRCode} />
        </div>

        <div className={styles.Address} onClick={copyText}>
          {seedData.walletAddress} <CopyIcon />
        </div>
      </div>
    </div>
  );
}

export default Receive;
