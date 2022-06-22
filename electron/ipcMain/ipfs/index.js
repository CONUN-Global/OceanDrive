const { Web3Storage } = require('@conun-global/web3.storage');

let node;

const swarmKeyPath = '../../../private/swarm.key';
const BOOTSTRAP_ADDRESSES = [
  '/ip4/54.180.86.210/tcp/4001/ipfs/12D3KooWEdS9HrfcoF8vZjEpfKEF3Hh3dbFyLrEUMXhUM3xoJrNt'
];

async function executeWeb3Storage() {
  try {
    const storage = new Web3Storage();
    await storage.startUp(swarmKeyPath, BOOTSTRAP_ADDRESSES);

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
