import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RandomWord from 'random-words';
import useStore from '../../../../store/store';

import OnboardingContainer from '../../OnboardingContainer';
import TextBox from '../../../../components/TextBox';
import Navigation from '../../../../components/Navigation';
import Tag from '../../../../components/Tag';
import suffleItems from '../../../../helpers/suffleItems';
import styles from './ConfirmCreate.module.scss';

const title = 'Your Secret Backup Phrases';
const description = 'Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.';
function ConfirmCreate() {
  const [inputPhrases, setInputPhrases] = useState<string[]>([]);
  const backupPhrases = useStore(state => state.backupPhrase);
  const [phraseArr, setPhraseArr] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (backupPhrases) {
      const randomPhrase = RandomWord({ exactly: 8 });
      const phrases = backupPhrases.split(' ').concat(randomPhrase);
      const suffledPhrases = suffleItems(phrases);
      setPhraseArr(suffledPhrases);
    } else {
      alert('Get backup phrase first');
    }
  }, []);

  const addItem = (name: string) => {
    const itemFound = inputPhrases.find(phrase => phrase == name);
    if (!itemFound && inputPhrases.length < 12) {
      setInputPhrases([...inputPhrases, name]);
    } else return;
  };

  const removeItem = (name: string) => {
    const selectedItems = inputPhrases.filter(phrase => phrase !== name);
    setInputPhrases(selectedItems);
  };

  return (
    <OnboardingContainer className={styles.Onboarding} title={title} description={description}>
      <TextBox inputText={inputPhrases.join(' ')} />

      {phraseArr.map((phrase, i) => (
        <Tag key={`${i}_${phrase}`} length={inputPhrases.length} name={phrase} addItem={addItem} removeItem={removeItem} />
      ))}

      <Navigation prev={() => navigate(-1)} next={() => navigate('./create')} />
    </OnboardingContainer>
  );
}

export default ConfirmCreate;
