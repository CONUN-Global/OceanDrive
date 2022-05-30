import React from 'react';
import { BuyHistorySeedData } from '../SEED_DATA';

import styles from './History.module.scss';

interface HistoryData {
  icon: string;
  fileName: string;
  size: string;
}

function HistoryRows({ rowData }: { rowData: HistoryData }) {
  return (
    <div>
      {rowData.fileName}, {rowData.size}
    </div>
  );
}

function TableHeaders({ heading }: { heading: string }) {
  return (
    <th scope="col" className={styles.Heading}>
      {heading}
    </th>
  );
}

function History() {
  const headings = ['File', 'Size'];
  return (
    <table>
      <thead className={styles.TableHead}>
        <tr>
          {headings.map(heading => (
            <TableHeaders key={heading} heading={heading} />
          ))}
        </tr>
      </thead>

      <tbody className={styles.TableBody}>
        {BuyHistorySeedData.map((rowData, index) => (
          <HistoryRows key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
}

export default History;
