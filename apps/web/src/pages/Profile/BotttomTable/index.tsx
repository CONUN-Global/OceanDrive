import React from 'react';

import { ReactComponent as GenearatedIcon } from '../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as CopyIcon } from '../../../assets/icons/boxed-copy-icon.svg';
import { ReactComponent as CyconIcon } from '../../../assets/icons/boxed-cycon-icon.svg';
import { ReactComponent as TickIcon } from '../../../assets/icons/tick-icon.svg';
import { ReactComponent as DownloadedIcon } from '../../../assets/icons/downloaded-icon.svg';

import styles from './BottomTable.module.scss';

const data = [
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
  { contentName: 'Script_scandinavia_2 person.txt', fileSize: '1MB', date: '04.23.2022 10:00 pm', amount: '0.435CYC', txHash: '0x7UY0...9488', copy: 'copy' },
];

interface PropWord {
  clicked: string;
}

const BottomTable = ({ clicked }: PropWord) => {
  return (
    <div className={styles.BottomTable}>
      <div className={styles.TableContainer}>
        <table className={styles.Table}>
          <thead>
            <tr className={styles.TableRow}>
              <th></th>
              <th>Content Name</th>
              <th>File Size</th>
              <th className={clicked === 'downloads' ? styles.HideTh : ''}>{clicked === 'published' && 'Amount'}</th>
              <th>Date</th>
              <th>TX Hash</th>
              {clicked === 'published' && <th></th>}
              {clicked === 'downloads' && (
                <th>
                  <DownloadedIcon className={styles.DownloadedIconStyle}/>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((val: any, key: any) => {
                return (
                  <tr key={key} className={styles.TableRow2}>
                    {/* here will be generated icon */}
                    <td className={styles.FirstTd}>
                      <GenearatedIcon />
                    </td>
                    <td>{val.contentName}</td>
                    <td>{val.fileSize}</td>
                    <td className={clicked === 'downloads' ? styles.HideTh : ''}>
                      {clicked === 'published' && (
                        <div className={styles.AmountContainer}>
                          <CyconIcon className={styles.Cycon} fill="#f37123" />
                          <div className={styles.CyconDescDiv}>{val.amount}</div>
                        </div>
                      )}
                    </td>
                    <td>{val.date}</td>
                    <td>{val.txHash}</td>
                    <td>
                      {clicked === 'published' && <CopyIcon />}
                      {clicked === 'downloads' && <TickIcon />}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
      </div>
    </div>
  );
};

export default BottomTable;
