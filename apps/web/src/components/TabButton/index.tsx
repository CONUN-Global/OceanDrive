import React from 'react';
import classNames from 'classnames';
import styles from './TabButton.module.scss';

interface IBtn {
  setCurrentTab: any;
  currentTab: string;
  content: string;
}

function TabButton({ setCurrentTab, currentTab, content }: IBtn) {
  return (
    <button className={classNames(styles.Btn, { [styles.Active]: currentTab === content })} onClick={() => setCurrentTab(content)}>
      {content}
    </button>
  );
}

export default TabButton;
