import React from 'react';
import { TableSeedData } from '../SEED_DATA';

import styles from './Table.module.scss';

interface RowData {
  buyerData: string;
  editionData: string;
  dateData: string;
  priceData: string | number;
}

function TableHeaders({ heading }: { heading: string }) {
  return (
    <th scope="col" className={styles.Heading}>
      {heading}
    </th>
  );
}
function TableRows({ rowData }: { rowData: RowData }) {
  return (
    <tr className={styles.RowContainer}>
      <td>{rowData.buyerData}</td>
      <td>{rowData.editionData}</td>
      <td className={styles.DateCell}>{rowData.dateData}</td>
      <td className={styles.PriceCell}>{rowData.priceData}</td>
    </tr>
  );
}

function Table() {
  const headings = ['Buyer', 'Edition', 'Date', 'Price'];
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
        {TableSeedData.map((rowData, index) => (
          <TableRows key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
