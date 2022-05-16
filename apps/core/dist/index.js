"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_storage_1 = require("@conun-global/web3.storage");
async function executeWeb3Storage() {
    try {
        let storage = new web3_storage_1.Web3Storage(await web3_storage_1.libp2pBundle());
        await storage.startUp();
        return storage;
    }
    catch (error) {
        console.log("error: ", error);
    }
}
executeWeb3Storage().then((result) => {
    console.log('result: ', result);
});
//# sourceMappingURL=index.js.map