import React from 'react';
import { useDispatch } from 'react-redux';
import { setBackAnimation } from '../../redux/onboardingSlice';
import Button from '../Button';
import HStack from '../HStack';
import styles from './Navigation.module.scss';

interface INavigation {
  prev: () => void;
  next: () => void;
  isButtonAvailable?: boolean;
  clickText?: string;
}
function Navigation({ prev, next, isButtonAvailable = true, clickText }: INavigation) {
  const dispatch = useDispatch();

  const prevFunc = () => {
    dispatch(setBackAnimation(true));
    prev();
  };
  const nextFunc = () => {
    dispatch(setBackAnimation(false));
    next();
  };

  return (
    <HStack className={styles.HStack}>
      <Button className={styles.PrevButton} round onClick={prevFunc}>
        Previous
      </Button>
      <Button className={styles.NextButton} round onClick={nextFunc} isDisabled={!isButtonAvailable}>
        {clickText ? clickText : 'Next'}
      </Button>
    </HStack>
  );
}
export default Navigation;
