import classNames from 'classnames';
import React, { useState } from 'react';
import Button from 'src/components/Button';
import { SeedDataType } from '../../seedDataType';
import styles from './FilterButtons.module.scss';

function FilterButtons({ data, setData }: { data: SeedDataType[]; setData: any }) {
  const buttonLabels = ['Sold', 'Purchased', 'Favorites'] as const;

  type Label = typeof buttonLabels[number];

  const [activeTab, setActiveTab] = useState<Label>('Sold');

  function handleClick(e: any) {
    // data.filter();
    setActiveTab(e.target.innerText);
  }

  // console.log('Date from btns', data);

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
