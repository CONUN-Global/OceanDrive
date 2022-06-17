import classNames from 'classnames';
import React, { useState } from 'react';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy-icon.svg';

import styles from './ClickableTooltip.module.scss';

interface ClickableProps {
  copyText: string;
  children?: any;
  place?: string;
}

const ClickableTooltip = ({place, copyText, children }: ClickableProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyText);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };
  return (
    <div className={styles.ShowCopied}>
      {showCopied && <div className={classNames(styles.CopiedText, {[styles.PlacePos]: place === 'publish-table'})}>copied</div>}
      <div
        className={styles.CopyIconWrapper}
        onClick={() => {
          copyToClipboard();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ClickableTooltip;
