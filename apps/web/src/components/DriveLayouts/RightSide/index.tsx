import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { PageProps } from '../../../animations/pages';

import styles from './RightSideLayer.module.scss';
import Searchbar from '../../../components/Searchbar';

interface IRightSide {
  children: ReactNode;
}

function RightSide({ children }: IRightSide) {
  return (
    <div className={styles.OuterBg}>
      <div className={styles.InnerBg}>
        <div className={styles.TopBar}>
          <Searchbar />
        </div>
        <motion.div className={styles.ChildrenContainer} {...PageProps}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default RightSide;
