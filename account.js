//	@ghasemkiani/polygon/account

import {cutil} from "@ghasemkiani/base";
import {Account as AccountEth} from "@ghasemkiani/ethereum";
import {Client} from "@ghasemkiani/polygonscan-api";
import {util as utilPolygon} from "./util.js";

class Account extends AccountEth {
	//
}
cutil.extend(Account.prototype, {
	defutil: utilPolygon,
	defScan: Client,
});

export {Account};
