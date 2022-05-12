import React from 'react';
import Card from '../../components/Card';

import styles from './Main.module.scss';
function Main() {
  return (
    <div className={styles.Main}>
      <Card>
        <h4>Header</h4>
      </Card>
    </div>
  );
}
export default Main;
