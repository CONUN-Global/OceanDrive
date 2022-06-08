const { Web3Storage } = require('@conun-global/web3.storage');

let node;

async function executeWeb3Storage() {
  try {
    const storage = new Web3Storage();
    await storage.startUp();
    return storage;
  } catch (error) {
    console.log('error: ', error);
  }
}

const initIpfs = async () => {
  try {
    node = await executeWeb3Storage();

    console.log('Ipfs created successfuly');
  } catch (err) {
    console.error(err);
  }
};

const getIpfsNode = async () => {
  return node;
};

module.exports = {
  initIpfs,
  getIpfsNode
};
