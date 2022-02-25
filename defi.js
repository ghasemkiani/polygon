//	@ghasemkiani/polygon/defi

import {cutil} from "@ghasemkiani/base";
import {DeFi as DeFiEth} from "@ghasemkiani/ethereum";
import {Client} from "@ghasemkiani/polygonscan-api";
import {util as utilPolygon} from "./util.js";
import {iwAccount as iwAccountPolygon} from "./iwAccount.js";
import {iwContract as iwContractPolygon} from "./iwContract.js";
import {iwToken as iwTokenPolygon} from "./iwToken.js";

class DeFi extends cutil.mixin(DeFiEth, iwAccountPolygon, iwContractPolygon, iwTokenPolygon) {
}
cutil.extend(DeFi.prototype, {
	defutil: utilPolygon,
	defScan: Client,
});

export {DeFi};
