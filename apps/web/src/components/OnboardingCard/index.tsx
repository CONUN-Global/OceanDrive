import React from 'react';
import Card from '../Card';
import styles from './OnboardingCard.module.scss';

interface IOnboardingCard {
  title: string;
  description: string;
  img?: string;
}

const OnboardingCard = ({ title, description, img }: IOnboardingCard) => {
  return (
    <Card variant="secondary" className={styles.Card}>
      <div>{img && <img src={img} alt={title} />}</div>
      <div>
        <h3 className={styles.Title}>{title}</h3>
        <div className={styles.Desc}>{description}</div>
      </div>
    </Card>
  );
};

export default OnboardingCard;
