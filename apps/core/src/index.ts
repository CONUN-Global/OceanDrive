import {Web3Storage, libp2pBundle} from"@conun-global/web3.storage"

async function executeWeb3Storage() {
    try {
      let storage = new Web3Storage(await libp2pBundle());
      await storage.startUp();
      return storage;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  executeWeb3Storage().then((result) => {
    console.log('result: ', result)
  });