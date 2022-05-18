"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.Web3Storage = void 0;
var IPFS = __importStar(require("ipfs-core"));
// todo working with ipfs path
var Web3Storage = /** @class */ (function () {
    function Web3Storage(libp2pInit) {
        var _this = this;
        this._contentHelper = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var result, cids, _i, cids_1, cid, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.node.add({ content: data }, { chunker: "size-2048" })];
                    case 2:
                        cids = _a.sent();
                        console.log("cids: ", cids);
                        // we loop over the results because 'add' supports multiple
                        // additions, but we only added one entry here so we only see
                        // one log line in the output
                        for (_i = 0, cids_1 = cids; _i < cids_1.length; _i++) {
                            cid = cids_1[_i].cid;
                            // CID (Content IDentifier) uniquely addresses the data
                            // and can be used to get it again.
                            result.push(cid);
                        }
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        console.log("ipfs-get-data", error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.libp2pInit = libp2pInit;
        this.id = "";
        this.peers = "";
    }
    Web3Storage.prototype.startUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, IPFS.create({
                                libp2p: this.libp2pInit
                            })];
                    case 1:
                        _a.node = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.node.id()];
                    case 2:
                        _b.id = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.node.swarm.peers()];
                    case 3:
                        _c.peers = _d.sent();
                        console.log("The node now has ".concat(this.peers.length, " peers. Peer address is: ").concat(JSON.stringify(this.id)));
                        return [2 /*return*/, this.id];
                }
            });
        });
    };
    Web3Storage.prototype.setContent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._contentHelper(data)];
                    case 1: 
                    // todo chunk file option
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Web3Storage.prototype.add = function (file, callback) {
        var _this = this;
        var fileBuff = Buffer.from(file);
        var progressCall = function (data) {
            callback(((data * 100) / fileBuff.byteLength).toFixed(2));
        };
        return new Promise(function (resolve, reject) {
            _this.node
                .add({
                content: fileBuff
            }, {
                progress: progressCall
            })
                .then(function (cid) {
                resolve(cid);
            })["catch"](function (error) { return reject(error); });
        });
    };
    Web3Storage.prototype.addAll = function (files) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, result, e_1_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 11]);
                        _b = __asyncValues(this.node.addAll(files));
                        _d.label = 1;
                    case 1: return [4 /*yield*/, _b.next()];
                    case 2:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 4];
                        result = _c.value;
                        console.log(result);
                        _d.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 6:
                        _d.trys.push([6, , 9, 10]);
                        if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 8];
                        return [4 /*yield*/, _a.call(_b)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 10: return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Web3Storage.prototype.cat = function (cid) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, stream, stream_1, stream_1_1, chunk, e_2_1, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        if (!this.node) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 15, , 16]);
                        return [4 /*yield*/, this.node.cat(cid)];
                    case 2:
                        stream = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 14]);
                        stream_1 = __asyncValues(stream);
                        _b.label = 4;
                    case 4: return [4 /*yield*/, stream_1.next()];
                    case 5:
                        if (!(stream_1_1 = _b.sent(), !stream_1_1.done)) return [3 /*break*/, 7];
                        chunk = stream_1_1.value;
                        // chunks of data are returned as a Buffer, convert it back to a string
                        result.push(chunk.toString());
                        _b.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1["return"]))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(stream_1)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_2 = _b.sent();
                        console.log("ipfs-get-data", error_2.message);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/, result];
                }
            });
        });
    };
    Web3Storage.prototype.get = function (cid) {
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, stream, stream_2, stream_2_1, chunk, e_3_1, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = [];
                        if (!this.node) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 15, , 16]);
                        return [4 /*yield*/, this.node.get(cid)];
                    case 2:
                        stream = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 14]);
                        stream_2 = __asyncValues(stream);
                        _b.label = 4;
                    case 4: return [4 /*yield*/, stream_2.next()];
                    case 5:
                        if (!(stream_2_1 = _b.sent(), !stream_2_1.done)) return [3 /*break*/, 7];
                        chunk = stream_2_1.value;
                        // chunks of data are returned as a Buffer, convert it back to a string
                        result.push(chunk.toString());
                        _b.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2["return"]))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(stream_2)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_3 = _b.sent();
                        console.log("ipfs-get-data", error_3.message);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/, result];
                }
            });
        });
    };
    Web3Storage.prototype.ls = function (cid) {
        var e_4, _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, stream, stream_3, stream_3_1, file, e_4_1, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = {};
                        if (!this.node) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 15, , 16]);
                        return [4 /*yield*/, this.node.ls(cid)];
                    case 2:
                        stream = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 14]);
                        stream_3 = __asyncValues(stream);
                        _b.label = 4;
                    case 4: return [4 /*yield*/, stream_3.next()];
                    case 5:
                        if (!(stream_3_1 = _b.sent(), !stream_3_1.done)) return [3 /*break*/, 7];
                        file = stream_3_1.value;
                        // chunks of data are returned as a Buffer, convert it back to a string
                        result = file;
                        _b.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(stream_3_1 && !stream_3_1.done && (_a = stream_3["return"]))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(stream_3)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_4 = _b.sent();
                        console.log("ipfs-get-data", error_4.message);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/, result];
                }
            });
        });
    };
    Web3Storage.prototype.mkdir = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.node.files
                .mkdir(path)
                .then(function (cid) {
                console.log("mkdir path: ", cid);
                resolve(cid);
            })["catch"](function (error) { return reject(error); });
        });
    };
    Web3Storage.prototype.status = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.node.files
                .stat(path)
                .then(function (cid) {
                console.log("status path: ", cid);
                resolve(cid);
            })["catch"](function (error) { return reject(error); });
        });
    };
    Web3Storage.prototype.rmFile = function (pathToFile) {
        var _this = this;
        if (pathToFile.includes("."))
            return new Promise(function (resolve, reject) {
                _this.node.files
                    .rm(pathToFile)
                    .then(function (cid) {
                    console.log("rmFile path: ", cid);
                    resolve(cid);
                })["catch"](function (error) { return reject(error); });
            });
    };
    Web3Storage.prototype.rmDir = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.node.files
                .rm(path, { recursive: true })
                .then(function (cid) {
                console.log("rmDir path: ", cid);
                resolve(cid);
            })["catch"](function (error) { return reject(error); });
        });
    };
    Web3Storage.prototype.mv = function (from, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.node.files
                .mv(from, to)
                .then(function (cid) {
                console.log("mv path: ", cid);
                resolve(cid);
            })["catch"](function (error) { return reject(error); });
        });
    };
    Web3Storage.prototype.lsDir = function (cid) {
        var e_5, _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, stream, stream_4, stream_4_1, file, e_5_1, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = {};
                        if (!this.node) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 15, , 16]);
                        return [4 /*yield*/, this.node.files.ls(cid)];
                    case 2:
                        stream = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 14]);
                        stream_4 = __asyncValues(stream);
                        _b.label = 4;
                    case 4: return [4 /*yield*/, stream_4.next()];
                    case 5:
                        if (!(stream_4_1 = _b.sent(), !stream_4_1.done)) return [3 /*break*/, 7];
                        file = stream_4_1.value;
                        result.push(file.toString());
                        _b.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_5_1 = _b.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(stream_4_1 && !stream_4_1.done && (_a = stream_4["return"]))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(stream_4)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_5 = _b.sent();
                        console.log("ipfs-get-data", error_5.message);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/, result];
                }
            });
        });
    };
    return Web3Storage;
}());
exports.Web3Storage = Web3Storage;
//# sourceMappingURL=index.js.map