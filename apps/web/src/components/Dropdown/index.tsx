import React from 'react';
import classNames from 'classnames';
import useToggle from '../../hooks/useToggle';
import DropdownItem from '../../components/Dropdown/DropdownItem';
import { ReactComponent as DArrowIcon } from '../../assets/icons/down-vector-icon.svg';
import { ObjectType } from '../../types/index';
import styles from './Dropdown.module.scss';

interface IDropdown {
  selected: ObjectType;
  items: {
    [key: string]: string;
  }[];
  classname?: string;
  setSelected: React.Dispatch<React.SetStateAction<ObjectType>>;
}
function Dropdown({ items, selected, setSelected, classname }: IDropdown) {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div className={classNames(styles.Dropdown, classname)}>
      <div onClick={setToggle} className={styles.SelectedItemContainer}>
        <div>{selected.method}</div>
        <DArrowIcon />
      </div>

      <ul className={classNames(styles.ListContainer, { [styles.close]: !toggle })}>
        {items.map(item => (
          <DropdownItem className={classNames(styles.Item)} selectItem={setSelected} key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default Dropdown;
