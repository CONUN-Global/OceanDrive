import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';
import { ReactComponent as CopyIcon } from '../../../../assets/icons/copy-icon.svg';
import Tooltip from '../../../../components/Tooltip';
import { toast, ToastContainer } from 'react-toastify';

import { motion } from 'framer-motion';

import styles from './Receive.module.scss';

const seedData = {
  walletAddress: '0x879879879879877349509245092854439',
};

function copyText() {
  navigator.clipboard.writeText(seedData.walletAddress);
  toast.info('Text copied to clipboard', {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
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
        <Tooltip content="Click to copy to clipboard" direction="Top">
          <div className={styles.Address} onClick={copyText}>
            {seedData.walletAddress} <CopyIcon />
          </div>
        </Tooltip>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Receive;
