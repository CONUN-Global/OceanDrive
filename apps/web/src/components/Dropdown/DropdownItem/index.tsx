import classNames from 'classnames';
import styles from './DropdownItem.module.scss';

interface Props {
  item: string;
  className?: string;
  onclick: React.MouseEventHandler<HTMLLIElement> | undefined;
}
function DropdownItem({ item, onclick, className }: Props) {
  return (
    <li className={classNames(styles.DropdownItem, className)} onClick={onclick}>
      {item}
    </li>
  );
}

export default DropdownItem;
