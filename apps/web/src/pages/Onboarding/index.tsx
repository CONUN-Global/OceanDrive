import React from 'react';
import OnboardingContainer from './OnboardingContainer';

const title = 'Welcome to Conun Drive';
const description = 'Conun Drive is a place for storage sharing and content sharing. Connect or create your wallet to explore today.';
function Onboarding() {
  return (
    <>
      <OnboardingContainer title={title} description={description} isInitial={true}>
        hello
      </OnboardingContainer>
    </>
  );
}
export default Onboarding;
