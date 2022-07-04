import React from 'react';
import Button from '../../Button';
import SettingsCard from '../SettingsCard';

import { useNavigate } from 'react-router-dom';
import useMessageTimer from '../../../hooks/useMessageTimer';

import styles from './Seed.module.scss';
import { useDispatch } from 'react-redux';
import { toggleSettings } from 'src/redux/settingsSlice';

const wordArray = ['faith', 'good', 'person', 'honest', 'election', 'different', 'relationship', 'life', 'building', 'relationship', 'life', 'building'];

function Seed() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showMessage, handleMessage } = useMessageTimer(2000);

  function handleCopy() {
    if (wordArray) {
      const string = wordArray.join(' ');
      navigator.clipboard.writeText(string);
      handleMessage();
    }
  }

  return (
    <SettingsCard title="Seed Phrase Backup">
      <div className={styles.Container}>
        <div className={styles.PhraseContainer}>
          {wordArray.map((word, index) => (
            <div className={styles.SingleWord} key={index}>
              {word}
            </div>
          ))}
        </div>
        <div className={styles.BtnContainer}>
          <Button className={styles.CopyButton} onClick={handleCopy}>
            Copy Phrase
          </Button>
          {showMessage && <div className={styles.Copied}>Copied!</div>}
          <Button className={styles.Button} onClick={() => dispatch(toggleSettings())}>
            OK
          </Button>
        </div>
      </div>
    </SettingsCard>
  );
}

export default Seed;
