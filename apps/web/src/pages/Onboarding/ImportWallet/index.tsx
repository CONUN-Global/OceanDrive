import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingContainer from '../OnboardingContainer';
import Dropdown from '../../../components/Dropdown';
import Navigation from '../../../components/Navigation';

import { ObjectType } from '../../../types/index';
import { IMPORT_WALLET_TITLE, IMPORT_WALLET_DESCR, LOGIN_METHODS } from '../const';
import styles from './ImportWallet.module.scss';

function ImportWallet() {
  const [selected, setSelected] = useState<ObjectType>(LOGIN_METHODS[0]);
  const [inputPrivateKey, setInputPrivateKey] = useState('');
  const [inputPhrases, setInputPhrases] = useState('');
  const navigate = useNavigate();
  return (
    <OnboardingContainer className={styles.Onboarding} title={IMPORT_WALLET_TITLE}>
      <div className={styles.CardContainer}>
        <div className={styles.DropdownContainer}>
          <div className={styles.DefaultMessage}>Select import method</div>
          <Dropdown items={LOGIN_METHODS} setSelected={setSelected} selected={selected}></Dropdown>
        </div>
        <div className={styles.InputContainer}>
          {selected.id === 'private-key' ? (
            <input className={styles.InputKey} value={inputPrivateKey} onChange={e => setInputPrivateKey(e.target.value)} placeholder="Enter your private key here" />
          ) : (
            <textarea className={styles.InputPhrase} rows={3} value={inputPhrases} onChange={e => setInputPhrases(e?.target?.value)}></textarea>
          )}
        </div>
        <Navigation clickText='Import' prev={() => navigate(-1)} next={() => navigate('/')} />
      </div>
    </OnboardingContainer>
  );
}

export default ImportWallet;
