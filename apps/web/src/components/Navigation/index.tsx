import React from 'react';
import Button from 'src/components/Button';
import HStack from 'src/components/HStack';

import styles from './Navigation.module.scss';
interface INavigation {
  prev: () => void;
  next: () => void;
}
function Navigation({ prev, next }: INavigation) {
  return (
    <HStack className={styles.HStack}>
      <Button className={styles.PrevButton} round onClick={prev}>
        Previous
      </Button>
      <Button className={styles.NextButton} round onClick={next}>
        Next
      </Button>
    </HStack>
  );
}
export default Navigation;
