import classNames from 'classnames';
import React, { useState } from 'react';
import { nameShortener } from 'src/utils';
import { ReactComponent as GenearatedIcon } from '../../../../assets/icons/generated-icon-sample.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/icons/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/icons/play-icon.svg';

import styles from './QueItem.module.scss';

const QueItem = ({ val, keyVal }: { val: any; keyVal: number }) => {
  const [icon, setIcon] = useState(val.copy);

  const name = nameShortener(val.contentName, 26);

  return (
    <tr key={keyVal} className={classNames(styles.TableRow2, { [styles.PausedTd]: icon === 'play-icon' })}>
      {/* here will be generated icon */}
      <td className={styles.FirstTd}>
        <GenearatedIcon width={12.64} height={15} />
      </td>
      <td className={styles.SecondTd}>{name}</td>
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
            width={19}
            height={19}
            onClick={() => {
              setIcon('play-icon');
            }}
          />
        )}
        {icon === 'play-icon' && (
          <PlayIcon
          fill='yellow'
            width={19}
            height={19}
            onClick={() => {
              setIcon('pause-icon');
            }}
          />
        )}
      </td>
    </tr>
  );
};

export default QueItem;
