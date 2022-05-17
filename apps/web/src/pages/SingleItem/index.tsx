import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SingleItem.module.scss';

function SingleItem() {
  const { collection, id } = useParams();

  useEffect(() => {
    console.log('API Call with the id of the item', collection, id);
  }, []);

  return (
    <div>
      <div className={styles.UpperContainer}>
        <img className={styles.Image} src={require(`src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
        <div className={styles.TextContainer}>
          <h1>IN THE IMAGINARIUM OF THINGS #4/5</h1>
          <div className={styles.CreatorContainer}>
            <div>
              <img className={styles.Avatar} src={require('src/assets/icons/avatar.png')} />
              <div>
                <div>creator</div>
                <div className={styles.CreatorName}>Adam Driver</div>
              </div>
            </div>
            <div>{collection}</div>
          </div>
          <div className={styles.DescriptionBox}>
            <div>Description</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium, ab odio numquam, deleniti autem nihil in temporibus odit fuga distinctio rem maxime quo molestiae
              dignissimos a molestias, minima repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste minus culpa in quasi sit minima laborum facere, libero enim, nisi, dolorem
              delectus natus aut ea aperiam eos reiciendis reprehenderit mollitia.
            </div>
          </div>
        </div>
      </div>
      Collection: {collection}, ID: {id}
    </div>
  );
}

export default SingleItem;
