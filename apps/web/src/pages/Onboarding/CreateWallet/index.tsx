import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RandomWord from 'random-words';
import OnboardingContainer from '../OnboardingContainer';
import TextBox from '../../../components/TextBox';
import Button from 'src/components/Button';
import ConfirmModal from '../../../components/Modal';
import Navigation from 'src/components/Navigation';
import { ReactComponent as CopyIcon } from '../../../assets/icons/icon_copy.svg';
import styles from './CreateWallet.module.scss';
import Backdrop from 'src/components/Backdrop';

const title = 'Your Secret Backup Phrases';

function CreateWallet() {
  const randomPhrase = RandomWord({ exactly: 12 }).join(' ');
  const [inputPhrase, setInputPhrase] = useState<string>(randomPhrase);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(inputPhrase);
    setIsCopied(true);
  };

  const handleNext = () => {
    setIsOpen(true);
  };
  return (
    <OnboardingContainer
      className={styles.Onboarding}
      title={title}
      description={
        <span className={styles.Description}>
          <span>Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.</span>
          <span>Your secret phrase is 12 words with spaces included. When storing your secret phrase the order of the words should remain the same.</span>
        </span>
      }
    >
      <>
        <TextBox inputText={inputPhrase} setInputText={setInputPhrase}></TextBox>
        <div className={styles.Container}>
          <Button className={styles.CopyButton} round variant="tertiary" onClick={handleCopy}>
            <CopyIcon className={styles.Clipboard} />
            <p>Copy Secret Phase</p>
          </Button>

          <p className={isCopied ? styles.Copied : styles.NotCopied}>Copied!</p>
        </div>

        {modalIsOpen ? (
          <>
            <Backdrop setIsOpen={setIsOpen}></Backdrop> <ConfirmModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
        <Navigation prev={() => navigate('./create')} next={handleNext} />
      </>
    </OnboardingContainer>
  );
}

export default CreateWallet;
