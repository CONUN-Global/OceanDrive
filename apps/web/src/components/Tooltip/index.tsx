import React, { ReactNode, useState } from 'react';
import styles from './Tooltip.module.scss';
import classNames from 'classnames';

interface IPageProps {
  delay?: 100 | 200 | 300 | 400 | 500;
  direction?: 'Right' | 'Left' | 'Top' | 'Bottom';
  content: string;
  children: ReactNode;
}

const Tooltip = ({ children, delay = 500, direction = 'Bottom', content }: IPageProps) => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const hide = () => {
    clearInterval(timeout);
    setActive(false);
  };
  const show = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  return (
    <div className={styles.TooltipWrapper} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {active && <div className={classNames(styles.TooltipTip, styles[direction])}>{content}</div>}
    </div>
  );
};

export default Tooltip;
