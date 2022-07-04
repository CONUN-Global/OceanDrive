import React from 'react';
import Button from '../../Button';
import useMessageTimer from '../../../hooks/useMessageTimer';
import SettingsCard from '../SettingsCard';
import splitKey from '../../../helpers/splitKey';

import styles from './Key.module.scss';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';

const key = '0x83547098723504987342098734059873452987325987583947589734578349873549854798543';
const warning = 'Never disclose this key. Anyone with your private keys can steal any assets held in your account.';

function Key() {
  const { showMessage, handleMessage } = useMessageTimer(2000);

  function handleCopy() {
    if (key) {
      navigator.clipboard.writeText(key);
      handleMessage();
    }
  }

  const dispatch = useDispatch();
  return (
    <SettingsCard title="Export Private Key">
      <div className={styles.ContentContainer}>
        <div className={styles.UpperContent}>
          <div className={styles.KeyContainer}>{key}</div>
          <div className={styles.Warning}>
            <b>WARNING: </b>
            {warning}
          </div>
        </div>

        <div className={styles.BtnContainer}>
          <Button variant="secondary" className={styles.CopyButton} onClick={handleCopy}>
            Copy PK
          </Button>
          {showMessage && <div className={styles.Copied}>Copied!</div>}
          <Button variant="secondary" className={styles.Button} onClick={() => dispatch(toggleSettings())}>
            OK
          </Button>
        </div>
      </div>
    </SettingsCard>
  );
}

export default Key;
