import classNames from 'classnames';
import React, { useState } from 'react';
import TabButton from 'src/components/TabButton';
import Button from '../../../../components/Button';
import { SeedDataType } from '../../seedDataType';
import styles from './FilterButtons.module.scss';

function FilterButtons({ data, setData }: { data: SeedDataType[]; setData: any }) {
  const Tabs = ['Sold', 'Purchased', 'Favorites'] as const;
  type Label = typeof Tabs[number];

  const [activeTab, setActiveTab] = useState<Label>('Sold');

  return (
    <div className={styles.BtnContainer}>
      {Tabs.map((btn, index) => {
        return <TabButton key={index} setCurrentTab={setActiveTab} currentTab={activeTab} content={btn} />;
      })}
    </div>
  );
}

export default FilterButtons;
