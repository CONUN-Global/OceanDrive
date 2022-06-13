import React, { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as GenearatedIcon } from '../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as CopyIcon } from '../../../assets/icons/boxed-copy-icon.svg';
import { ReactComponent as CyconIcon } from '../../../assets/icons/boxed-cycon-icon.svg';
import { ReactComponent as TickIcon } from '../../../assets/icons/tick-icon.svg';
import { ReactComponent as DownloadedIcon } from '../../../assets/icons/downloaded-icon.svg';
import { ReactComponent as PauseIcon } from '../../../assets/icons/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../../assets/icons/play-icon.svg';

import { data } from './DemoData';
import { queData } from './DemoData';

import styles from './BottomTable.module.scss';

interface PropWord {
  clicked: string;
}

const BottomTable = ({ clicked }: PropWord) => {
  const queExist = queData !== null && queData.length > 0 && clicked === 'downloads';

  return (
    <>
      {queExist && (
        <div className={styles.TopTableContainer}>
          <div className={styles.TableTitle}>downloads queue (35)</div>
          <div className={styles.TopTable}>
            <div className={styles.TableContainer}>
              <table className={styles.Table}>
                <thead>
                  <tr className={classNames(styles.TableRow, styles.TopTableRowHeight)}>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className={styles.HideTh}></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {queData.length > 0 &&
                    queData.map((val: any, key: any) => {
                      const [icon, setIcon] = useState(val.copy);
                      return (
                        <tr key={key} className={classNames(styles.TableRow2, { [styles.PausedTd]: icon === 'play-icon' })}>
                          {/* here will be generated icon */}
                          <td className={styles.FirstTd}>
                            <GenearatedIcon />
                          </td>
                          <td className={styles.SecondTd}>{val.contentName}</td>
                          <td>{val.fileSize}</td>
                          <td className={styles.HideTh}></td>
                          <td>{val.date}</td>
                          <td className={styles.ProgressBarContainer}>
                            <div className={styles.ProgressBar}>
                              {val.txHash}
                              <div className={styles.ColoredBack} style={{ width: val.txHash }}></div>
                            </div>
                          </td>
                          <td className={styles.IconSt}>
                            {icon === 'pause-icon' && (
                              <PauseIcon
                                width={20}
                                height={20}
                                onClick={() => {
                                  setIcon('play-icon');
                                }}
                              />
                            )}
                            {icon === 'play-icon' && (
                              <PlayIcon
                                width={20}
                                height={20}
                                onClick={() => {
                                  setIcon('pause-icon');
                                }}
                              />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {queExist && <div className={styles.TableTitle}>downloads history (111)</div>}

      <div className={classNames(styles.BottomTable, { [styles.BottomWhenQueExist]: queExist })}>
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
                    <DownloadedIcon className={styles.DownloadedIconStyle} />
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
    </>
  );
};

export default BottomTable;
