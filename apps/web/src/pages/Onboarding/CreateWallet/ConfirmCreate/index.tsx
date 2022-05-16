import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OnboardingContainer from '../../OnboardingContainer';
import TextBox from '../../../../components/TextBox';
import Button from '../../../../components/Button';
import HStack from '../../../../components/HStack';

import styles from './ConfirmCreate.module.scss';

const title = 'Your Secret Backup Phrases';
const description = 'Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.';
function ConfirmCreate() {
  const [inputPhrase, setInputPhrase] = useState<string>('');
  const navigate = useNavigate();

  return (
    <OnboardingContainer title={title} description={description}>
      <TextBox inputText={inputPhrase} setInputText={setInputPhrase}></TextBox>

      <HStack className={styles.HStack}>
        <Button className={styles.PrevButton} round onClick={() => navigate('./create')}>
          Previous
        </Button>
        <Button className={styles.NextButton} round onClick={() => navigate('./create')}>
          Next
        </Button>
      </HStack>
    </OnboardingContainer>
  );
}

export default ConfirmCreate;
