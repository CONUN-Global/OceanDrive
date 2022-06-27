import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../../Button';
import styles from './FilterButtons.module.scss';

function FilterButtons() {
  const buttonLabels = ['Sold', 'Purchased', 'Favorites'] as const;

  type Label = typeof buttonLabels[number];

  const [activeTab, setActiveTab] = useState<Label | undefined>(undefined);

  function handleClick(e: any) {
    setActiveTab(e.target.innerText);
  }

  return (
    <div className={styles.BtnContainer}>
      {buttonLabels.map((btn, index) => {
        return (
          <Button className={classNames(styles.Btn, { [styles.active]: btn === activeTab })} onClick={handleClick} key={index}>
            {btn}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
