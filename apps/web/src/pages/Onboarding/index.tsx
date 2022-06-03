import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBackAnimation } from 'src/redux/onboardingSlice';

import Button from '../../components/Button';
import HStack from '../../components/HStack';
import OnboardingCard from '../../components/OnboardingCard';
import { ONBOARDING_DESCR, ONBOARDING_TITLE, walletCards } from './const';
import styles from './Onboarding.module.scss';
import OnboardingContainer from './OnboardingContainer';

function Onboarding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickFunc = (pageComp: any) => {
    dispatch(setBackAnimation(false));
    navigate(pageComp);
  };

  return (
    <>
      <OnboardingContainer title={ONBOARDING_TITLE} description={ONBOARDING_DESCR} isInitial={true} isCentered={true}>
        <HStack>
          {walletCards.map((card: any, idx: number) => (
            <Button variant="ghost" onClick={() => clickFunc(card.link)} key={idx}>
              <OnboardingCard {...card} />
            </Button>
          ))}
        </HStack>
        <span className={styles.More}>More about CONUN Wallet</span>
      </OnboardingContainer>
    </>
  );
}
export default Onboarding;
