// import { libp2pBundle, Web3Storage } from "@conun-global/web3.storage";
import IPFS from "ipfs-core";
// import { libp2pBundle, Web3Storage } from "@conun-global/web3.storage";
let node;

export async function createIpfs() {
  // try {
  //   const storage = new Web3Storage(await libp2pBundle());
  //   await storage.startUp();
  // } catch (error) {
  //   console.log("error: ", error);
  // }

  try {
    node = await IPFS.create();
    const id = await node.id();
    return id;
  } catch (err) {
    console.error(err);
  }
}
