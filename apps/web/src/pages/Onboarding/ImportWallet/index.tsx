import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingContainer from '../OnboardingContainer';
import Dropdown from '../../../components/Dropdown';
import Navigation from '../../../components/Navigation';
// import TextBox from '../../../components/TextBox';
import { ObjectType } from '../../../types/index';
import styles from './ImportWallet.module.scss';

const title = 'Import Account with Private Key';
const description = 'Import an existing account with your secret seed prhase or use a private key.';
const LOGIN_METHODS = [
  { id: 'private-key', method: 'Private Key' },
  { id: 'seed-phrase', method: 'Seed Phrase' },
];

function ImportWallet() {
  const [selected, setSelected] = useState<ObjectType>(LOGIN_METHODS[0]);
  const [privateKey, setPrivateKey] = useState('');

  const navigate = useNavigate();

  return (
    <OnboardingContainer className={styles.Onboarding} title={title} description={description}>
      <div className={styles.CardContainer}>
        <div className={styles.DropdownContainer}>
          <div className={styles.DefaultMessage}>Select import method</div>
          <Dropdown items={LOGIN_METHODS} setSelected={setSelected} selected={selected}></Dropdown>
        </div>
        <div className={styles.InputContainer}>
          {/* {selected ? }
          <TextBox inputText={inputPhrases.join(' ')} /> */}
          <input className={styles.InputKey} value={privateKey} onChange={e => setPrivateKey(e.target.value)} placeholder="Enter your private key here" />
          <Navigation prev={() => navigate(-1)} next={() => navigate('/')} />
        </div>
      </div>
    </OnboardingContainer>
  );
}

export default ImportWallet;
