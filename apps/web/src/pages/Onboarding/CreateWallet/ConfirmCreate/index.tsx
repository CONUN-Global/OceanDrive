import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../../../redux/store';
import OnboardingContainer from '../../OnboardingContainer';
import Navigation from '../../../../components/Navigation';
import Tag from '../../../../components/Tag';
import TextBox from '../../../../components/TextBox';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import suffleItems from '../../../../helpers/suffleItems';
import { CONFIRM_WALLET_TITLE, CONFIRM_WALLET_DESCR } from '../../const';
import styles from './ConfirmCreate.module.scss';

function ConfirmCreate() {
  const [inputPhrases, setInputPhrases] = useState<string[]>([]);
  const [allPhraseArr, setAllPhraseArr] = useState<string[]>([]);
  const [answerPhrases, setAnswerPhrases] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const confirmPhrases = useSelector((store: RootState) => store.onboardingReducer.backupPhrase);
  const navigate = useNavigate();

  const isIdentical = (arrA: string[], arrB: string[]) => {
    return arrA.every((item, index) => item === arrB[index]);
  };
  useEffect(() => {
    if (confirmPhrases) {
      const backupPhrase = confirmPhrases.slice(0, 12);
      setAnswerPhrases(backupPhrase);
      const arrayCopy = [...confirmPhrases];
      const suffledPhrases = suffleItems(arrayCopy);
      setAllPhraseArr(suffledPhrases);
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
    if (inputPhrases.length < 12) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    }
    if (inputPhrases.length === 12) {
      if (isIdentical(inputPhrases, answerPhrases)) {
        setIsModalOpen(true);
      } else {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2000);
      }
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    localStorage.setItem('userLoggedIn', JSON.stringify(true));
    navigate('/storage', { replace: true });
    window.location.reload();
  };
  return (
    <OnboardingContainer className={styles.Onboarding} title={CONFIRM_WALLET_TITLE} description={CONFIRM_WALLET_DESCR}>
      <TextBox inputText={inputPhrases.join(' ')} />

      {/* currently there is no design thing for warnings onboarding confirmation page if the selected words less than 12, so when it is ready we can replace it with the below div (using kinda tost, popup whatever it is ASAP), but the logic will be same */}
      {showWarning && (
        <div className={styles.WarningBox}>
          <p>Please select exactly 12 words!</p>
        </div>
      )}

      <div className={styles.Tags}>
        {allPhraseArr?.map((phrase, i) => (
          <Tag key={`${i}_${phrase}`} round={true} length={inputPhrases.length} name={phrase} addItem={addItem} removeItem={removeItem} />
        ))}
      </div>

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
