import React, { useState } from 'react';
import Button from '../../../../../components/Button';
import styles from './Confirm.module.scss';
// import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as SendIcon } from '../../../../../assets/icons/send.svg';
import Modal from '../../../../../components/Modal';
import Backdrop from '../../../../../components/Backdrop';
// import { toast, ToastContainer } from 'react-toastify';
import classNames from 'classnames';

const seedData = {
  address: '83159875343845982754389897543983453634438',
  currency: 'CYCON COIN',
  amount: 100,
  fee: 0.001,
};

function Confirm() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    // API CALL
    // toast.success('Sent!', {
    //   position: 'bottom-center',
    //   autoClose: 1000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   progress: undefined,
    // });
    setShowModal(true);
  }

  const handleConfirm = () => setShowModal(false);

  return (
    <>
      <form className={styles.Container} onSubmit={handleSubmit}>
        <div className={styles.InfoContainer}>
          <div>
            <h3 className={styles.Title}>Recipient Address</h3>
            <div className={styles.Info}>{seedData.address}</div>
          </div>
          <div>
            <h3 className={styles.Title}>Currency</h3>
            <div className={styles.Info}>{seedData.currency}</div>
          </div>
          <div>
            <h3 className={styles.Title}>Amount</h3>
            <div className={classNames(styles.Info, styles.Bold)}>{seedData.amount} CYC</div>
          </div>
          <div>
            <h3 className={styles.Title}>Network Fee</h3>
            <div className={classNames(styles.Info, styles.Bold)}>{seedData.fee} CYC/KB</div>
          </div>
        </div>
        <Button type="submit">
          <SendIcon />
          SEND
        </Button>
      </form>
      {showModal && (
        <>
          <Backdrop isModalOpen={showModal} setIsModalOpen={setShowModal}></Backdrop>
          <Modal isModalOpen={showModal} isButtonAvailable={true} title="Transaction Successful" desc="Your transaction was successful." buttonText="Confirm" handleConfirm={handleConfirm}>
            <div className={styles.PlaceholderBox}></div>
          </Modal>
        </>
      )}
      {/* <ToastContainer /> */}
    </>
  );
}

export default Confirm;
