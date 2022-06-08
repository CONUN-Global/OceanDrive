import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { AOnboardingProps, BOnboardingProps } from '../../../animations/onboarding';
import { ReactComponent as OceanIcon } from '../../../assets/icons/welcom_page_icon.svg';
import Card from '../../../components/Card';
import styles from './OnboardingContainer.module.scss';

interface OnboardingContainerProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  isInitial: boolean;
  className?: string;
  isCentered?: boolean;
}

OnboardingContainer.defaultProps = {
  isInitial: false,
};

function OnboardingContainer({ children, title, description, isInitial, className, isCentered }: OnboardingContainerProps) {
  const backAnimation = useSelector((store: RootState) => store.onboardingReducer.backAnimation);

  const onboardingAnimation = backAnimation ? BOnboardingProps : AOnboardingProps;

  return (
    <div className={classNames(styles.container, className)}>
      <motion.div {...onboardingAnimation} className={styles.CardWrapper}>
        <Card className={styles.Card}>
          <div className={styles.ContentContainer}>
            <div className={classNames(styles.Header, { [styles.centered]: isCentered })}>
              <h3 className={styles[isInitial ? 'initial' : '']}>
                {isInitial ? <OceanIcon /> : ''}
                {title || ''}
              </h3>
              <p>{description}</p>
            </div>
            {children}
          </div>
        </Card>
      </motion.div>
      <div className={styles.policy}>
        <ul className={styles.policy_list}>
          <li className={styles.policy_item}>
            <a href="/">Policy</a>
          </li>
          <li className={styles.policy_item}>
            <a href="/">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OnboardingContainer;
