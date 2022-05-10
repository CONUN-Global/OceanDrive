import { v4 as uuidv4 } from 'uuid';
import { store } from './store';

let CID = store.get('CID');

if (!CID) {
  CID = uuidv4();
  store.set('CID', CID);
}

export const getAnalyticsId = () => store.get('CID');
