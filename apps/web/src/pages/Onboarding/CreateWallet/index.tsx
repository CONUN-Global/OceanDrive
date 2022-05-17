import React from 'react';
import OnboardingContainer from '../OnboardingContainer';
import classes from './CreateWallet.module.scss';

const title = 'Your Secret Backup Phrases';

function CreateWallet() {
  return (
    <OnboardingContainer
      title={title}
      description={
        <span className={classes.description}>
          <span>Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.</span>
          <span>Your secret phrase is 12 words with spaces included. When storing your secret phrase the order of the words should remain the same.</span>
        </span>
      }
    >
      Create
    </OnboardingContainer>
  );
}

export default CreateWallet;
