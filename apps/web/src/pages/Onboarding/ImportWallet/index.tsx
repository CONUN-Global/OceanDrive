import React from 'react';
import OnboardingContainer from '../OnboardingContainer';
// import styles from './ImportWallet.module.scss';

const title = 'Your Secret Backup Phrases';
const description = 'Copy your unique secret phrase to keep somewhere safe. The phrase cannot be recovered. This phrase will remain as your wallet password until it is changed.';

function ImportWallet() {
  return (
    <OnboardingContainer title={title} description={description}>
      Create
    </OnboardingContainer>
  );
}

export default ImportWallet;
