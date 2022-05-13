import React from 'react';
import Card from 'src/components/Card';
import { ReactComponent as OceanIcon } from '../../../assets/icons/welcom_page_icon.svg';
import classes from './OnboardingContainer.module.scss';

interface OnboardingContainerProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  isInitial: boolean;
}

OnboardingContainer.defaultProps = {
  isInitial: false,
};

function OnboardingContainer({ children, title, description, isInitial }: OnboardingContainerProps) {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.header}>
          <h3 className={classes[isInitial ? 'initial' : '']}>
            {isInitial && <OceanIcon />}
            {title}
          </h3>
          <p>{description}</p>
        </div>
        {children}
      </Card>
      <div className={classes.policy}>
        <ul className={classes.policy_list}>
          <li className={classes.policy_item}>
            <a href="/">Policy</a>
          </li>
          <li className={classes.policy_item}>
            <a href="/">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OnboardingContainer;
