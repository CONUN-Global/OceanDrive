import React from 'react';
import styles from './Profile.module.scss';
import DriveLayout from 'src/components/DriveLayouts';


const seedData = { balance: 598.0 };

const Profile = () => {
  return (
    <DriveLayout>
        <div className={styles.Container}>
          {/* TOP */}
          <div className={styles.TopContainer}>
            <h4 className={styles.Title}>MY BALANCE</h4>
            <div className={styles.Balance}>
              <div className={styles.TopItems}>
                <h3 className={styles.CoinType}>CYCON COIN</h3>
                <h3 className={styles.Total}>{seedData.balance.toFixed(2)} CYC</h3>
              </div>
              <div className={styles.BottomItems}>
                <button className={styles.BuyButton}>Buy</button>
                <div className={styles.BuyInfo}>(Goes to Bithumb)</div>
              </div>
            </div>
          </div>
        </div>
    </DriveLayout>
     
  );
};

export default Profile;
