import React, { useState } from 'react';
import Button from 'src/components/Button';
import styles from './Confirm.module.scss';

import { ReactComponent as SendIcon } from 'src/assets/icons/send.svg';
import Modal from 'src/components/Modal';
import Backdrop from 'src/components/Backdrop';

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
    setShowModal(true);
  }

  const handleConfirm = () => setShowModal(false);

  return (
    <>
      <form className={styles.Container} onSubmit={handleSubmit}>
        <div className={styles.InfoContainer}>
          <div>
            <h3 className={styles.Title}>RECIPIENT ADDRESS</h3>
            <div className={styles.Info}>{seedData.address}</div>
          </div>
          <div>
            <h3 className={styles.Title}>RECIPIENT CURRENCY</h3>
            <div className={styles.Info}>{seedData.currency}</div>
          </div>
          <div>
            <h3 className={styles.Title}>AMOUNT</h3>
            <div className={styles.Info}>{seedData.amount} CYC</div>
          </div>
          <div>
            <h3 className={styles.Title}>NETWORK FEE</h3>
            <div className={styles.Info}>{seedData.fee} CYC/KB</div>
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
          <Modal isModalOpen={showModal} title="Transaction Successful" desc="Your transaction was successful." buttonText="Confirm" handleConfirm={handleConfirm}>
            <div style={{ height: '120px', width: '290px', backgroundColor: '#a8a8a8', borderRadius: '15px' }}></div>
          </Modal>
        </>
      )}
    </>
  );
}

export default Confirm;
