import React from 'react';
import Button from '../Button';
import HStack from '../HStack';
import styles from './Navigation.module.scss';

interface INavigation {
  prev: () => void;
  next: () => void;
  isButtonAvailable?: boolean;
}
function Navigation({ prev, next, isButtonAvailable = true }: INavigation) {
  return (
    <HStack className={styles.HStack}>
      <Button className={styles.PrevButton} round onClick={prev}>
        Previous
      </Button>
      <Button className={styles.NextButton} round onClick={next} isDisabled={!isButtonAvailable}>
        Next
      </Button>
    </HStack>
  );
}
export default Navigation;
