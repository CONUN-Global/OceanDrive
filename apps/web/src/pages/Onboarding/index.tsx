import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import HStack from '../../components/HStack';
import styles from './Onboarding.module.scss';
import OnboardingContainer from './OnboardingContainer';

const title = 'Welcome to Conun Drive';
const description = 'Conun Drive is a place for storage sharing and content sharing. Connect or create your wallet to explore today.';
function Onboarding() {
  const navigate = useNavigate();
  return (
    <>
      <OnboardingContainer title={title} description={description} isInitial={true}>
        <HStack className={styles.HStack}>
          <Button variant="ghost" onClick={() => navigate('./create')}>
            <Card variant="secondary" className={styles.Card}>
              <h3 className={styles.Title}>Create Wallet</h3>
              <div className={styles.Desc}>Create a new Conun wallet to use with all Conun-related products.</div>
            </Card>
          </Button>
          <Button variant="ghost" onClick={() => navigate('./import')}>
            <Card variant="secondary" className={styles.Card}>
              <h3 className={styles.Title}>Import Wallet</h3>
              <div className={styles.Desc}>Import any Ethereum wallets with your unique secret phrase codes.</div>
            </Card>
          </Button>
        </HStack>
      </OnboardingContainer>
    </>
  );
}
export default Onboarding;
