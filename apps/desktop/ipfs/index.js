const IPFS = require('ipfs-core');
const { executeWeb3Storage } = require('@ocean-drive/core');

let node;

async function createIpfs() {
  executeWeb3Storage().then((res) => {
    console.log('res ===> ', res);
  });
  // try {
  //   node = await IPFS.create();
  //   const id = await node.id();
  //   return id;
  // } catch (err) {
  //   console.error(err);
  // }
}

module.exports = {
  createIpfs
};
