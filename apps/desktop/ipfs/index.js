const IPFS = require('ipfs-core');
const { libp2pBundle, Web3Storage } = require('@conun-global/web3.storage');
const { executeWeb3Storage } = require('../../core/lib/esm');
// import { libp2pBundle, Web3Storage } from "@conun-global/web3.storage";
let node;

async function createIpfs() {
  try {
    // const storage = new Web3Storage(await libp2pBundle());
    // await storage.startUp();
    await executeWeb3Storage().then((res) => {
      console.log('res ====> ', res);
    });
  } catch (error) {
    console.log('error: ', error);
  }

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
