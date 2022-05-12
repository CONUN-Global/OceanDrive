import classNames from 'classnames';
import styles from './Row.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}
function Row({ children, className }: Props) {
  return <div className={classNames(styles.Row, className)}>{children}</div>;
}
export default Row;
