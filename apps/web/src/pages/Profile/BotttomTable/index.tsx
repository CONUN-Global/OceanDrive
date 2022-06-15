import React, { useState } from 'react';
import classNames from 'classnames';
import QueItem from './QueItem';

import { ReactComponent as GenearatedIcon } from '../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as CopyIcon } from '../../../assets/icons/boxed-copy-icon.svg';
import { ReactComponent as CyconIcon } from '../../../assets/icons/boxed-cycon-icon.svg';
import { ReactComponent as TickIcon } from '../../../assets/icons/tick-icon.svg';
import { ReactComponent as DownloadedIcon } from '../../../assets/icons/downloaded-icon.svg';
import { ReactComponent as GeneratedPersonalIcon } from '../../../assets/icons/generated-personal-icon.svg';

import { data } from './DemoData';
import { queData } from './DemoData';
import Data from '../../Marketplace/seedData.json';

import styles from './BottomTable.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import CollectionCard from 'src/pages/Marketplace/MarketplaceGrid/MarketplaceCard';

interface PropWord {
  clicked: string;
  showGrid: boolean;
}

const BottomTable = ({ clicked, showGrid }: PropWord) => {
  const queExist = queData !== null && queData.length > 0 && clicked === 'downloads';
  const gridBool = showGrid && clicked === 'published'

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
                <tbody>{queData.length > 0 && queData.map((val: any, key: any) => <QueItem val={val} key={key} keyVal={key} />)}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {queExist && <div className={styles.TableTitle}>downloads history (111)</div>}

      {gridBool ? (
        <div className={classNames(styles.BottomTable, styles.BottomTableConditionalStyle)}>
          <div className={styles.GridContainer}>
            {data.map((profileData, idx) => (
              <CollectionCard profileData={profileData} page='profile' key={idx} />
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
                    function copyText() {
                      navigator.clipboard.writeText(val.txHash);
                      toast.info('Text copied to clipboard', {
                        position: 'top-center',
                        autoClose: 600,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    }

                    return (
                      <tr key={key} className={styles.TableRow2}>
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
                          {(clicked === 'published' || clicked === 'personal') && (
                            <CopyIcon
                              onClick={() => {
                                copyText();
                              }}
                            />
                          )}
                          {clicked === 'downloads' && <TickIcon />}
                          <ToastContainer className={styles.ToastPosition} />
                        </td>
                        {clicked === 'personal' && (
                          <td>
                            <GeneratedPersonalIcon />
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
