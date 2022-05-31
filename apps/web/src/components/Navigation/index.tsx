import React from 'react';
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
  return (
    <HStack className={styles.HStack}>
      <Button className={styles.PrevButton} style={{ boxShadow: 'none' }} round onClick={prev}>
        Previous
      </Button>
      <Button className={styles.NextButton} style={{ boxShadow: 'none' }} round onClick={next} isDisabled={!isButtonAvailable}>
        {clickText ? clickText : 'Next'}
      </Button>
    </HStack>
  );
}
export default Navigation;
