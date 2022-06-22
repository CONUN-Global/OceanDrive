import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import useMessageTimer from 'src/hooks/useMessageTimer';
import SettingsCard from '../SettingsCard';
import splitKey from 'src/helpers/splitKey';

import styles from './Key.module.scss';

const key = '0x83547098723504987342098734059873452987325987583947589734578349873549854798543';
const warning = 'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.';

function Key() {
  const { showMessage, handleMessage } = useMessageTimer(2000);

  function handleCopy() {
    if (key) {
      navigator.clipboard.writeText(key);
      handleMessage();
    }
  }

  const navigate = useNavigate();
  return (
    <SettingsCard title="Export Private Key">
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContent}>
          <div className={styles.KeyContainer}>{key}</div>
          <div className={styles.Warning}>{warning}</div>
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CopyButton} onClick={handleCopy}>
            Copy Key
          </Button>
          {showMessage && <div className={styles.Copied}>Copied!</div>}
          <Button variant="secondary" className={styles.Button} onClick={() => navigate(-1)}>
            Ok
          </Button>
        </div>
      </div>
    </SettingsCard>
  );
}

export default Key;
