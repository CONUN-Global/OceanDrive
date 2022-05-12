import classNames from 'classnames';

import useToggle from '../../hooks/useToggle';
import styles from './Drawer.module.scss';

function Drawer({ open }: { open: boolean }) {
  const [toggle, setToggle] = useToggle(false);

  return (
    <div className={classNames(styles.MenuDrawer, { [styles.open]: open })}>
      <div onClick={setToggle}>{toggle ? <div>Toggle Open</div> : <div>Toggle Closed</div>}</div>
    </div>
  );
}
export default Drawer;
