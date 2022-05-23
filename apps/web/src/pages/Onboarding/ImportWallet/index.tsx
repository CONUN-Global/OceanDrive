import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingContainer from '../OnboardingContainer';
<<<<<<< HEAD
import Dropdown from '../../../components/Dropdown';
import Navigation from '../../../components/Navigation';
// import TextBox from '../../../components/TextBox';
import { ObjectType } from '../../../types/index';
import styles from './ImportWallet.module.scss';
=======
// import styles from './ImportWallet.module.scss';
>>>>>>> master

const title = 'Import Account with Private Key';
const description = 'Import an existing account with your secret seed prhase or use a private key.';
const LOGIN_METHODS = [
  { id: 'private-key', method: 'Private Key' },
  { id: 'seed-phrase', method: 'Seed Phrase' },
];

function ImportWallet() {
  const [selected, setSelected] = useState<ObjectType>(LOGIN_METHODS[0]);
  const [inputPrivateKey, setInputPrivateKey] = useState('');
  const [inputPhrases, setInputPhrases] = useState('');
  const navigate = useNavigate();

  return (
    <OnboardingContainer className={styles.Onboarding} title={title} description={description}>
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

          <Navigation prev={() => navigate(-1)} next={() => navigate('/')} />
        </div>
      </div>
    </OnboardingContainer>
  );
}

export default ImportWallet;
