import React from 'react';

import styles from './Transactions.module.scss';

const data = [3];

function Transactions() {
  return (
    <div className={styles.Container}>
      <table className={styles.Table}>
        <tr className={styles.TableRow}>
          <th>Transaction ID</th>
          <th>Status</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {data.length > 0 && <p className={styles.P}>data</p>}
      </table>
      {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
    </div>
  );
}

export default Transactions;
