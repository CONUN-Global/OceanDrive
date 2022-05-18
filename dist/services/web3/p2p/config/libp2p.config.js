"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.libp2pBundle = void 0;
var libp2p_noise_1 = require("@chainsafe/libp2p-noise");
var libp2p_gossipsub_1 = __importDefault(require("libp2p-gossipsub"));
var libp2p_kad_dht_1 = __importDefault(require("libp2p-kad-dht"));
var libp2p_mplex_1 = __importDefault(require("libp2p-mplex"));
var libp2p_tcp_1 = __importDefault(require("libp2p-tcp"));
var libp2p_webrtc_star_1 = __importDefault(require("libp2p-webrtc-star"));
var libp2p_websockets_1 = __importDefault(require("libp2p-websockets"));
var wrtc_1 = __importDefault(require("wrtc"));
var default_json_1 = __importDefault(require("./default.json"));
/**
 * Options for the libp2p bundle
 * @typedef {Object} libp2pBundle~options
 * @property {PeerId} peerId - The PeerId of the IPFS node
 * @property {Object} config - The config of the IPFS node
 * @property {Object} options - The options given to the IPFS node
 */
/**
 * This is the bundle we will use to create our fully customized libp2p bundle.
 *
 * @param {libp2pBundle~options} opts The options to use when generating the libp2p node
 * @returns {Libp2p} Our new libp2p node
 */
var libp2pBundle = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        return [2 /*return*/, __assign(__assign({}, config), { addresses: {
                    listen: default_json_1["default"].network.listen
                }, 
                // Lets limit the connection managers peers and have it check peer health less frequently
                connectionManager: {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    minPeers: 25,
                    maxPeers: 100,
                    pollInterval: 5000
                }, modules: {
                    transport: [libp2p_tcp_1["default"], libp2p_webrtc_star_1["default"], libp2p_websockets_1["default"]],
                    streamMuxer: [libp2p_mplex_1["default"]],
                    connEncryption: [libp2p_noise_1.NOISE],
                    pubsub: libp2p_gossipsub_1["default"],
                    dht: libp2p_kad_dht_1["default"]
                }, config: {
                    transport: (_a = {},
                        _a[libp2p_webrtc_star_1["default"].prototype[Symbol.toStringTag]] = {
                            wrtc: wrtc_1["default"]
                        },
                        _a),
                    peerDiscovery: (_b = {
                            autoDial: true
                        },
                        _b[libp2p_webrtc_star_1["default"].tag] = {
                            enabled: false
                        },
                        _b),
                    // Turn on relay with hop active so we can connect to more peers
                    relay: {
                        enabled: true,
                        hop: {
                            enabled: true,
                            active: true
                        }
                    },
                    dht: {
                        enabled: true,
                        kBucketSize: 20,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        randomWalk: {
                            enabled: true,
                            interval: 10e3,
                            timeout: 2e3
                        }
                    },
                    pubsub: {
                        enabled: true
                    }
                }, metrics: {
                    enabled: true,
                    computeThrottleMaxQueueSize: 1000,
                    computeThrottleTimeout: 2000,
                    movingAverageIntervals: [
                        // The moving averages that will be computed
                        60 * 1000,
                        5 * 60 * 1000,
                        15 * 60 * 1000, // 15 minutes
                    ],
                    maxOldPeersRetention: 50
                } })];
    });
}); };
exports.libp2pBundle = libp2pBundle;
//# sourceMappingURL=libp2p.config.js.map