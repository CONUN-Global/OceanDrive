import classNames from 'classnames';
import React, { useState } from 'react'
import { ReactComponent as GenearatedIcon } from '../../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/icons/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/icons/play-icon.svg';

import styles from './QueItem.module.scss';

const QueItem = ({val, keyVal}: {val: any, keyVal: number}) => {
  const [icon, setIcon] = useState(val.copy);
  return (
    <tr key={keyVal} className={classNames(styles.TableRow2, { [styles.PausedTd]: icon === 'play-icon' })}>
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
}

export default QueItem