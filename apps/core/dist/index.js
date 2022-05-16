"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeWeb3Storage = void 0;
const web3_storage_1 = require("@conun-global/web3.storage");
async function executeWeb3Storage() {
    try {
        const storage = new web3_storage_1.Web3Storage(await web3_storage_1.libp2pBundle());
        await storage.startUp();
        return storage;
    }
    catch (error) {
        console.log('error: ', error);
    }
}
exports.executeWeb3Storage = executeWeb3Storage;
//# sourceMappingURL=index.js.map