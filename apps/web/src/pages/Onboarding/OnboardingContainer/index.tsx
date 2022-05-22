import classNames from 'classnames';
import React from 'react';
import { ReactComponent as OceanIcon } from '../../../assets/icons/welcom_page_icon.svg';
import Card from '../../../components/Card';
import styles from './OnboardingContainer.module.scss';

interface OnboardingContainerProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  isInitial: boolean;
  className?: string;
}

OnboardingContainer.defaultProps = {
  isInitial: false,
};

function OnboardingContainer({ children, title, description, isInitial, className }: OnboardingContainerProps) {
  return (
    <div className={classNames(styles.container, className)}>
      <Card className={styles.Card}>
        <div className={styles.header}>
          <h3 className={styles[isInitial ? 'initial' : '']}>
            {isInitial ? <OceanIcon /> : ''}
            {title || ''}
          </h3>
          <p>{description}</p>
        </div>
        {children}
      </Card>
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
