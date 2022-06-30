import React from 'react';
import styles from './Transactions.module.scss';
<<<<<<< HEAD
import splitKey from 'src/helpers/splitKey';
import classNames from 'classnames';
=======
import splitKey from '../../../../helpers/splitKey';
>>>>>>> master

const data = [
  { transactionId: '0x7e930b0d8e6690d1472bf5b782e88e5823e57b3a98d7b6cc3474c0edbeb0b2ff', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x52bce9d5f5380da3a86f2d06151930dce0733c1c70a61f3ebe7813b9853a274b', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0xf36625bf41a4916fdaebc837d9c824d8d184c93b4a043ae29dca52a9f3b29a72', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'FAILURE', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'PENDING', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
  { transactionId: '0x83c52a1e8a3228c1b85c7c7e79d39d4276ac86814826a379007797330402667c', status: 'SUCCESS', date: '04/23/2022 5:43 pm', amount: '0.435 CYC' },
];

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function Transactions() {
  return (
    <div className={styles.Container}>
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
            data.map((val: any, key: number) => {
              const TransactionStatus = classNames({
                Pending: val.status === 'PENDING',
                Success: val.status === 'SUCCESS',
                Failure: val.status === 'FAILURE',
              });

              return (
                <tr key={key} className={styles.TableRow2}>
                  <td className={styles.TransactionID}>{splitKey(val.transactionId)}</td>
                  <td>
                    <div className={`${styles.StatusItem} ${styles[`${TransactionStatus}`]}`}>{val.status}</div>
                  </td>
                  <td>{val.date}</td>
                  <td>
                    <div className={styles.Value}>{val.amount}</div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
    </div>
  );
}

export default Transactions;
