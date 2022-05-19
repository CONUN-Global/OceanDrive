import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RandomWord from 'random-words';
import useStore from '../../../../store/store';
import OnboardingContainer from '../../OnboardingContainer';

import TextBox from '../../../../components/TextBox';
import Navigation from '../../../../components/Navigation';
import Tag from '../../../../components/Tag';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import suffleItems from '../../../../helpers/suffleItems';

import styles from './ConfirmCreate.module.scss';

const title = 'Your Secret Backup Phrases';
const description = 'Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.';
function ConfirmCreate() {
  const [inputPhrases, setInputPhrases] = useState<string[]>([]);
  const backupPhrases = useStore(state => state.backupPhrase);
  const [phraseArr, setPhraseArr] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (backupPhrases) {
      const randomPhrase = RandomWord({ exactly: 8 });
      const phrases = backupPhrases.split(' ').concat(randomPhrase);
      const suffledPhrases = suffleItems(phrases);
      setPhraseArr(suffledPhrases);
    } else {
      navigate(-1);
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

  const handleNext = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    localStorage.setItem('userLoggedIn', JSON.stringify(true));
  };
  return (
    <OnboardingContainer className={styles.Onboarding} title={title} description={description}>
      <TextBox inputText={inputPhrases.join(' ')} />

      {phraseArr.map((phrase, i) => (
        <Tag key={`${i}_${phrase}`} length={inputPhrases.length} name={phrase} addItem={addItem} removeItem={removeItem} />
      ))}

      <Navigation prev={() => navigate(-1)} next={handleNext} />
      {isModalOpen && (
        <>
          <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Backdrop>
          <Modal isModalOpen={isModalOpen} title="Wallet Successfully Created" desc="You will now be directed to your profile" buttonText="Continue" handleConfirm={handleConfirm}>
            <div className={styles.BoxPlaceHolder}></div>
          </Modal>
        </>
      )}
    </OnboardingContainer>
  );
}

export default ConfirmCreate;
