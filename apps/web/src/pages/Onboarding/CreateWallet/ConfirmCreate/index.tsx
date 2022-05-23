import RandomWord from 'random-words';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../../../components/Navigation';
import Tag from '../../../../components/Tag';
import TextBox from '../../../../components/TextBox';
import suffleItems from '../../../../helpers/suffleItems';
import useStore from '../../../../store/store';
import OnboardingContainer from '../../OnboardingContainer';
import styles from './ConfirmCreate.module.scss';

const title = 'Your Secret Backup Phrases';
const description = 'Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.';
function ConfirmCreate() {
  const [inputPhrases, setInputPhrases] = useState<string[]>([]);
  const backupPhrases = useStore(state => state.backupPhrase);
  const [phraseArr, setPhraseArr] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
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
    if (inputPhrases.length < 12) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    }
    if (inputPhrases.length === 12) {
      setIsModalOpen(false);
      localStorage.setItem('userLoggedIn', JSON.stringify(true));
      navigate('/storage', { replace: true });
      window.location.reload();
    }
  };

  return (
    <OnboardingContainer className={styles.Onboarding} title={title} description={description}>
      <TextBox inputText={inputPhrases.join(' ')} />

      {/* currently there is no design thing for warnings onboarding confirmation page if the selected words less than 12, so when it is ready we can replace it with the below div (using kinda tost, popup whatever it is ASAP), but the logic will be same */}
      {showWarning && (
        <div className={styles.WarningBox}>
          <p>Please select exactly 12 words!</p>
        </div>
      )}

      <div className={styles.Tags}>
        {phraseArr.map((phrase, i) => (
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
