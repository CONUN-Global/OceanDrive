import RandomWord from 'random-words';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBackupPhrase } from '../../../redux/onboardingSlice';

import OnboardingContainer from '../OnboardingContainer';
import Backdrop from '../../../components/Backdrop';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import Navigation from '../../../components/Navigation';
import TextBox from '../../../components/TextBox';
import useMessageTimer from 'src/hooks/useMessageTimer';
import { CREATE_WALLET_DESCR1, CREATE_WALLET_DESCR2, CREATE_WALLET_TITLE } from '../const';

import { ReactComponent as CopyIcon } from '../../../assets/icons/icon_copy.svg';

import styles from './CreateWallet.module.scss';

const titleStyle = {
  fontFamily: 'Barlow',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '160%',
  textAlign: 'center',
  color: '#5f93f1',
  width: '395px',
  height: '38px',
};

const description = (
  <div>
    Store your key phrase securely as it is <b>non-recoverable</b> and can grant access to your account.
  </div>
);

function CreateWallet() {
  const dispatch = useDispatch();
  const [randomPhrases, setRandomPhrases] = useState<string[]>();
  const [inputPhrases, setInputPhrases] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showMessage, handleMessage } = useMessageTimer(2000);
  const navigate = useNavigate();

  useEffect(() => {
    if (randomPhrases) return;
    const randomWords = RandomWord({ exactly: 12 });
    setRandomPhrases(randomWords);
    setInputPhrases(randomWords?.join(' '));
  }, []);

  const handleCopy = () => {
    if (inputPhrases) {
      navigator.clipboard.writeText(inputPhrases);
      setIsCopied(true);
      handleMessage();
    }
  };

  const handleNext = () => {
    setIsModalOpen(true);
    dispatch(setBackupPhrase(randomPhrases));
  };

  const handleConfirm = () => {
    navigate('./confirm');
  };
  return (
    <OnboardingContainer
      key="create-wallet-page"
      className={styles.Onboarding}
      title={CREATE_WALLET_TITLE}
      description={
        <span className={styles.Description}>
          <span>{CREATE_WALLET_DESCR1}</span>
          <span>{CREATE_WALLET_DESCR2}</span>
        </span>
      }
    >
      <>
        <TextBox inputText={inputPhrases}></TextBox>
        <div className={styles.Container}>
          <Button className={styles.CopyButton} round variant="tertiary" onClick={handleCopy}>
            <CopyIcon className={styles.Clipboard} />
            <p>Copy Secret Phrase</p>
          </Button>

          <p className={showMessage ? styles.Copied : styles.NotCopied}>Copied!</p>
        </div>
        <Navigation prev={() => navigate(-1)} next={handleNext} />
        {isModalOpen && (
          <>
            <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Backdrop>
            <Modal isModalOpen={isModalOpen} title="Reminder" desc={description} titleStyle={titleStyle} buttonText="Continue" handleConfirm={handleConfirm} isButtonAvailable={isCopied}>
              <div className={styles.BoxPlaceHolder}></div>
            </Modal>
          </>
        )}
      </>
    </OnboardingContainer>
  );
}

export default CreateWallet;
