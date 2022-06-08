import React from 'react';

import { motion } from 'framer-motion';

import styles from './Transactions.module.scss';

const data = [
  { transactionId: '0x7UY0...9488', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0x7UY0...9488', status: 'SUCCESS', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0x7UY0...9488', status: 'SUCCESS', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0x7UY0...9488', status: 'FAILURE', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
];

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function Transactions() {
  return (
    <motion.div transition={{ type: 'tween' }} initial={'hidden'} animate="visible" variants={variants} className={styles.Container}>
      <table className={styles.Table}>
        <thead>
          <tr className={styles.TableRow}>
            <th>Transaction ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((val: any, key: any) => {
              
              let statusColor;
              if (val.status === 'PENDING') statusColor = '#80A0D4';
              if (val.status === 'SUCCESS') statusColor = '#30D07A';
              if (val.status === 'FAILURE') statusColor = '#D12221';
              return (
                <tr key={key} className={styles.TableRow2}>
                  <td>{val.transactionId}</td>
                  <td style={{ color: statusColor }}>{val.status}</td>
                  <td>{val.date}</td> 
                  <td>{val.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
    </motion.div>
  );
}

export default Transactions;
