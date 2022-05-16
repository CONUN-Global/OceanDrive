import React from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';

interface IConfirmModal {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function ConfirmModal({ modalIsOpen, setIsOpen }: IConfirmModal) {
  let subtitle: any;
  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'blue';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal className={styles.ModalContainer} isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} contentLabel="Example Modal">
      ssssss
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
    </Modal>
  );
}
export default ConfirmModal;
