import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import OnboardingContainer from './OnboardingContainer';

import HStack from '../../components/HStack';
import Card from '../../components/Card';
import styles from './Onboarding.module.scss';

const title = 'Welcome to Conun Drive';
const description = 'Conun Drive is a place for storage sharing and content sharing. Connect or create your wallet to explore today.';
function Onboarding() {
  const navigate = useNavigate();
  return (
    <>
      <OnboardingContainer title={title} className={styles.Onboarding} description={description} isInitial={true}>
        <HStack className={styles.HStack}>
          <motion.div whileHover={{ y: -10 }} onClick={() => navigate('./create')}>
            <Card variant="secondary" className={styles.Card}>
              <div className={styles.SquareBox}></div>
              <h3 className={styles.Title}>Create Wallet</h3>
              <div className={styles.Desc}>Create a new Conun wallet to use with all Conun-related products.</div>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} onClick={() => navigate('./import')}>
            <Card variant="secondary" className={styles.Card}>
              <div className={styles.SquareBox}></div>
              <h3 className={styles.Title}>Import Wallet</h3>
              <div className={styles.Desc}>Import any Ethereum wallets with your unique secret phrase codes.</div>
            </Card>
          </motion.div>
        </HStack>
        <div className={styles.WalletLinkBoxContainer}>
          <div className={styles.WalletLinkBox}>
            <a href="https://conun.io/products/metacon" target="_blank" rel="noreferrer">
              More about Conun Wallet
            </a>
          </div>
        </div>
      </OnboardingContainer>
    </>
  );
}
export default Onboarding;
