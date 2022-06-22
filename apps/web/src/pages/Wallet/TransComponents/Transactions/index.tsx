import React from 'react';
import styles from './Transactions.module.scss';
import splitKey from 'src/helpers/splitKey';

const data = [
  { transactionId: '0x7e930b0d8e6690d1472bf5b782e88e5823e57b3a98d7b6cc3474c0edbeb0b2ff', status: 'PENDING', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0x52bce9d5f5380da3a86f2d06151930dce0733c1c70a61f3ebe7813b9853a274b', status: 'SUCCESS', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0xf36625bf41a4916fdaebc837d9c824d8d184c93b4a043ae29dca52a9f3b29a72', status: 'SUCCESS', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04.23.2022 5:43 pm', amount: '0.435CYC' },
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
                  <td>{splitKey(val.transactionId)}</td>
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
