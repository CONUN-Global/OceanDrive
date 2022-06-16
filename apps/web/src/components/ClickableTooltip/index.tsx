import React, { useState } from 'react';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy-icon.svg';

import styles from './ClickableTooltip.module.scss';

const ClickableTooltip = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('0x398543592...792085485846');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };
  return (
    <div className={styles.ShowCopied}>
      {showCopied && <div className={styles.CopiedText}>copied</div>}
      <CopyIcon
        fill="#ffffff"
        className={styles.CopyIcon}
        onClick={() => {
          copyToClipboard();
        }}
      />
    </div>
  );
};

export default ClickableTooltip;
