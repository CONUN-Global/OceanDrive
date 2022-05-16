import React from 'react';
import classes from './WalletCard.module.scss';

interface WalletCardProps {
  src: string;
  title: string;
  description?: string;
}

const WalletCard = ({ src, title, description }: WalletCardProps) => {
  return (
    <div className={classes.card}>
      <img src={src} alt="card wallet" />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default WalletCard;
