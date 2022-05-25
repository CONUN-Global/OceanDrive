import React from 'react';

import styles from './Receive.module.scss';

import QRCode from '../../../../assets/images/qr-code.png';
import { ReactComponent as CopyIcon } from 'src/assets/icons/copy-icon.svg';
import Tooltip from 'src/components/Tooltip';

const seedData = {
  walletAddress: '0x879879879879877349509245092854439',
};

function Receive() {
  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>My Wallet Address</h3>
      <div className={styles.ImageContainer}>
        <img src={QRCode} />
      </div>
      <Tooltip content="Click to copy to clipboard" direction="Bottom">
        <div className={styles.Address}>
          {seedData.walletAddress} <CopyIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Receive;
