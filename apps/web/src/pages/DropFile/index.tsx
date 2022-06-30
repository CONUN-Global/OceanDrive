import React, { useState } from 'react';

// import TitleAndSearch from '../../components/TitleAndSearch';
import DragAndDrop from '../../components/DragAndDrop';
import { UploadFile } from '../../types';
import Button from '../../components/Button';
import { data } from '../Profile/BottomTable/DemoData';
import { ReactComponent as GenearatedIcon } from '../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/boxed-copy-icon.svg';

import styles from './DropFile.module.scss';
import classNames from 'classnames';
import ClickableTooltip from '../../components/ClickableTooltip';
import UploadingPopup from '../../components/UploadingPopup';

const DropFile = () => {
  const [uploads, setUploads] = useState<UploadFile[]>([]);
  const [isPopupShowing, setIsPopupShowing] = useState(false);

  const sampleItems = uploads.length;

  const dataExist = data !== null && data.length > 0;

  return (
    <div className={styles.PageContainer}>
      {!dataExist && (
        <div className={styles.WelcomeContainer}>
          <div className={styles.Title}>Welcome!</div>
          <div>This is your Ocean Drive Storage. All of your uploaded content will appear here. Drag and drop in a file or choose one from your computer to get started. </div>
        </div>
      )}

      <div className={classNames(styles.DropZoneContainer, { [styles.DataExistHeight]: dataExist })}>
        <DragAndDrop data={uploads} setData={setUploads} bgColor="#E9F1FF">
          <div className={styles.Container}>
            <div className={styles.FileDropText}>
              Drag and Drop <br /> or
            </div>
            <Button type="button" className={styles.FileDropBtn}>
              Browse
            </Button>
            <div className={styles.Uploads}>Unimited Size Uploads</div>
          </div>
        </DragAndDrop>
      </div>

      {dataExist && (
        <div className={classNames(styles.BottomTable)}>
          <div className={styles.TableContainer}>
            <table className={styles.Table}>
              <thead>
                <tr className={styles.TableRow}>
                  <th></th>
                  <th>File Name</th>
                  <th>File Size</th>
                  <th>Date</th>
                  <th>TX Hash</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={styles.TableBodyScroll}>
                {data.length > 0 &&
                  data.map((val: any, key: any) => {
                    return (
                      <tr key={key} className={styles.TableRow2}>
                        <td>
                          <GenearatedIcon />
                        </td>
                        <td>{val.contentName}</td>
                        <td>{val.fileSize}</td>
                        <td>{val.date}</td>
                        <td>{val.txHash}</td>
                        <td>
                          <ClickableTooltip place="publish-table" copyText={val.txHash}>
                            <CopyIcon />
                          </ClickableTooltip>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {uploads.length > 0 && <UploadingPopup page="drop-file" items={uploads} />}
        </div>
      )}
    </div>
  );
};

export default DropFile;
