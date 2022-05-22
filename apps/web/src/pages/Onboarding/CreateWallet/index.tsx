import RandomWord from 'random-words';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CopyIcon } from '../../../assets/icons/icon_copy.svg';
import Backdrop from '../../../components/Backdrop';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import Navigation from '../../../components/Navigation';
import TextBox from '../../../components/TextBox';
import useStore from '../../../store/store';
import OnboardingContainer from '../OnboardingContainer';
import styles from './CreateWallet.module.scss';

const title = 'Your Secret Backup Phrases';

function CreateWallet() {
  const randomPhrases = RandomWord({ exactly: 12 }).join(' ');
  const [inputPhrases, setInputPhrases] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const backupPhrase = useStore(store => store.setBackupPhrase);

  const navigate = useNavigate();

  useEffect(() => {
    if (inputPhrases) return;
    setInputPhrases(randomPhrases);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputPhrases);
    setIsCopied(true);
  };

  const handleNext = () => {
    setIsModalOpen(true);
    backupPhrase(inputPhrases);
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
        <TextBox inputText={inputPhrases}></TextBox>
        <div className={styles.Container}>
          <Button className={styles.CopyButton} round variant="tertiary" onClick={handleCopy}>
            <CopyIcon className={styles.Clipboard} />
            <p>Copy Secret Phase</p>
          </Button>

          <p className={isCopied ? styles.Copied : styles.NotCopied}>Copied!</p>
        </div>
        <Navigation prev={() => navigate(-1)} next={handleNext} />

        {isModalOpen && (
          <>
            <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Backdrop>
            <Modal
              isModalOpen={isModalOpen}
              title="Copy and Store Information"
              desc="Did you remember to securely save a copy of your secret backup phrase? Copy and store your secret backup phrase on a personal device or write it down, then proceed to the next screen."
              buttonText="Continue"
              path="./confirm"
            >
              <div className={styles.BoxPlaceHolder}></div>
            </Modal>
          </>
        )}
      </>
    </OnboardingContainer>
  );
}

export default CreateWallet;
