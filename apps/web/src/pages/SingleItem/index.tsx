import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftSidebar from 'src/components/MarketplaceLayouts/LeftSidebar/LeftSidebar';
import SidebarContent from 'src/components/MarketplaceLayouts/LeftSidebar/SidebarContentLayout';
import MainBackground from 'src/components/MarketplaceLayouts/MainBackground/MainBackground';
import RightSideLayer from 'src/components/MarketplaceLayouts/RightSideLayer/RightSideLayer';

import styles from './SingleItem.module.scss';

function SingleItem() {
  const { collection, id } = useParams();

  useEffect(() => {
    console.log('API Call with the id of the item', collection, id);
  }, []);

  const headings = ['Buyer', 'Edition', 'Date', 'Price'];

  const seedData = [
    { buyerData: 'Billy', editionData: 'Rare', dateData: '1 week ago', priceData: 'Free' },
    { buyerData: 'Jean', editionData: 'Rare', dateData: '1 week ago', priceData: 'Free' },
    { buyerData: 'Is', editionData: 'Rare', dateData: '2 weeks ago', priceData: 'Free' },
    { buyerData: 'Not', editionData: 'Rare', dateData: '2 weeks ago', priceData: 'Free' },
    { buyerData: 'My', editionData: 'Rare', dateData: '2 weeks ago', priceData: 'Free' },
    { buyerData: 'Lover', editionData: 'Rare', dateData: '3 week ago', priceData: 'Free' },
    { buyerData: 'Shes', editionData: 'Rare', dateData: '3 weeks ago', priceData: 'Free' },
    { buyerData: 'Just', editionData: 'Rare', dateData: '3 weeks ago', priceData: 'Free' },
    { buyerData: 'A Girl', editionData: 'Rare', dateData: '4 weeks ago', priceData: 'Free' },
    { buyerData: 'Who', editionData: 'Rare', dateData: '4 weeks ago', priceData: 'Free' },
    { buyerData: 'Claims', editionData: 'Rare', dateData: '4 weeks ago', priceData: 'Free' },
  ];

  function TableHeaders({ heading }: any) {
    return <th scope="col">{heading}</th>;
  }
  function TableRows({ rowData }: any) {
    return (
      <tr className={styles.RowContainer}>
        <td>{rowData.buyerData}</td>
        <td>{rowData.editionData}</td>
        <td style={{ color: '#5F93F1' }}>{rowData.dateData}</td>
        <td style={{ textTransform: 'uppercase', color: '#64C2D1' }}>{rowData.priceData}</td>
      </tr>
    );
  }

  return (
    <MainBackground>
      <LeftSidebar>
        <SidebarContent></SidebarContent>
      </LeftSidebar>
      <RightSideLayer title="xxx">
        <div>
          <div className={styles.UpperContainer}>
            <img className={styles.Image} src={require(`src/assets/images/NFTTiles/NFT_Tiles-${id}.jpg`)} alt="NFT IMAGE" />
            <div className={styles.TextContainer}>
              <h1>IN THE IMAGINARIUM OF THINGS #4/5</h1>
              <div className={styles.CreatorContainer}>
                <div className={styles.User}>
                  <img className={styles.Avatar} src={require('src/assets/icons/avatar.png')} />
                  <div>
                    <div>creator</div>
                    <div className={styles.CreatorName}>Adam Driver</div>
                  </div>
                </div>
                <div>{collection}</div>
              </div>
              <div className={styles.DescriptionBox}>
                <h4>Description</h4>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium, ab odio numquam, deleniti autem nihil in temporibus odit fuga distinctio rem maxime quo molestiae
                  dignissimos a molestias, minima repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste minus culpa in quasi sit minima laborum facere, libero enim, nisi, dolorem
                  delectus natus aut ea aperiam eos reiciendis reprehenderit mollitia.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LowerContainer}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '25%', margin: '0 0 10px 2px' }}>
              <h3>Collection </h3>
              <h3 style={{ color: '#d7d7d7' }}>Buying History</h3>
            </div>

            {/* Start of Table */}
            <table className={styles.TableContainer}>
              <thead className={styles.TableHead}>
                <tr>
                  {headings.map(heading => (
                    <TableHeaders key={heading} heading={heading} />
                  ))}
                </tr>
              </thead>
              <tbody className={styles.TableBody}>
                {seedData.map((rowData, index) => (
                  <TableRows key={index} rowData={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </RightSideLayer>
    </MainBackground>
  );
}

export default SingleItem;

// {/* <MainBackground>
//       <LeftSideLayer>
//         <SidebarContent>
//           <Filter Data={currentData} setCurrentData={setCurrentData} />
//         </SidebarContent>
//       </LeftSideLayer>
//       <RightSideLayer title={'Marketplace'}>
//         {/* <TitleAndSearch>Marketplace</TitleAndSearch> */}
//         <CollectionGrid Data={currentData} />
//       </RightSideLayer>
//     </MainBackground> */}
