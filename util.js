//	@ghasemkiani/polygon/util

import {cutil} from "@ghasemkiani/base";
import {Util as UtilEth} from "@ghasemkiani/ethereum";

class Util extends UtilEth {}
cutil.extend(Util.prototype, {
	tok: "MATIC",
	DEFAULT_URL: "https://rpc-mainnet.maticvigil.com:443",
	NODE_KEY: "POLYGON_NODE",
	contracts: {
		"WMATIC": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
	},
	tokenDecimals: {},
	contractProxies: {},
});

const util = new Util();

export {Util, util};
