import { Web3Storage } from '@conun-global/web3.storage';

export async function executeWeb3Storage():Promise<any> {
  try {
    const storage = new Web3Storage();
    await storage.startUp();
    return storage;
  } catch (error) {
    console.log('error: ', error);
  }
}