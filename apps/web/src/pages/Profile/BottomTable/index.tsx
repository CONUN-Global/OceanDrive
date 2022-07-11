import React, { useState } from 'react';
import classNames from 'classnames';
import QueItem from './QueItem';

import { ReactComponent as GeneratedIcon } from '../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as CopyIcon } from '../../../assets/icons/boxed-copy-icon.svg';
import { ReactComponent as TickIcon } from '../../../assets/icons/tick-icon.svg';
import { ReactComponent as DownloadedIcon } from '../../../assets/icons/downloaded-icon.svg';
import { ReactComponent as GeneratedPersonalIcon } from '../../../assets/icons/generated-personal-icon.svg';

import { data } from './DemoData';
import { queData } from './DemoData';
import Data from '../../Marketplace/seedData.json';

import CollectionCard from 'src/pages/Marketplace/MarketplaceGrid/MarketplaceCard';
import ClickableTooltip from 'src/components/ClickableTooltip';
import styles from './BottomTable.module.scss';

interface PropWord {
  clicked: string;
  showGrid: boolean;
}

const BottomTable = ({ clicked, showGrid }: PropWord) => {
  const queExist = queData !== null && queData.length > 0 && clicked === 'downloads';
  const gridBool = showGrid && clicked === 'published';

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
                <tbody>{queData.length > 0 && queData.map((val: any, key: number) => <QueItem val={val} key={key} keyVal={key} />)}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {queExist && <div className={styles.TableTitle}>Downloads History (111)</div>}

      {gridBool ? (
        <div className={classNames(styles.BottomTable, styles.BottomTableConditionalStyle)}>
          <div className={styles.GridContainer}>
            {data.map((profileData, index) => (
              <CollectionCard profileData={profileData} page="profile" key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className={classNames(styles.BottomTable, { [styles.BottomWhenQueExist]: queExist })}>
          <div className={styles.TableContainer}>
            <table className={styles.Table}>
              <thead>
                <tr className={styles.TableRow}>
                  <th></th>
                  <th>{clicked === 'published' ? 'Content Name' : 'File Name'}</th>
                  <th>File Size</th>
                  <th className={clicked === 'downloads' || clicked === 'personal' ? styles.HideTh : ''}>{clicked === 'published' && 'Amount'}</th>
                  <th>Date</th>
                  <th>TX Hash</th>
                  {clicked === 'published' && <th></th>}
                  {clicked === 'downloads' && (
                    <th>
                      <DownloadedIcon className={styles.DownloadedIconStyle} />
                    </th>
                  )}
                  {clicked === 'personal' && <th></th>}
                  {clicked === 'personal' && (
                    <th>
                      <img src={require('../../../assets/images/DownloadActivityIcon.png')} className={styles.DownloadActivityIcon} />
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className={styles.TableBodyScroll}>
                {data.length > 0 &&
                  data.map((val: any, key: any) => {
                    let name;
                    const len = val.contentName.length;
                    if (len > 26) {
                      const arr = val.contentName.split('');
                      arr.splice(15, len - 23, '.', '.', '.');
                      const longName = arr.join('');
                      name = longName;
                    } else {
                      name = val.contentName;
                    }

                    return (
                      <tr key={key} className={styles.TableRow2}>
                        <td className={styles.FirstTd}>
                          <GeneratedIcon width={12.64} height={15} />
                        </td>
                        <td>{name}</td>
                        <td>{val.fileSize}</td>
                        <td className={clicked === 'downloads' ? styles.HideTh : ''}>
                          {clicked === 'published' &&
                            (val.amount === 'FREE' ? (
                              <div className={classNames(styles.AmountContainer, styles.AmountFreeContainer)}>{val.amount}</div>
                            ) : (
                              <div className={styles.AmountContainer}>
                                <div className={styles.CyconDescDiv}>{val.amount}</div>
                              </div>
                            ))}
                        </td>
                        <td>{val.date}</td>
                        <td>{val.txHash}</td>
                        <td>
                          {(clicked === 'published' || clicked === 'personal') && (
                            <ClickableTooltip place="publish-table" copyText={val.txHash}>
                              <CopyIcon width={11} height={11} />
                            </ClickableTooltip>
                          )}
                          {clicked === 'downloads' && <TickIcon width={13} height={13} />}
                        </td>
                        {clicked === 'personal' && (
                          <td>
                            <GeneratedPersonalIcon width={13} height={13} />
                          </td>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {data.length === 0 && <div className={styles.NoData}>NO DATA</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default BottomTable;
