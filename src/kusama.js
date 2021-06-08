//Define Endpoints
let endpoint = localStorage.getItem("endpoint");
if(!endpoint){
	localStorage.setItem("endpoint", "wss://kusama.api.onfinality.io/public-ws");
}

const { ApiPromise, WsProvider } = require("@polkadot/api");
const wsProvider = new WsProvider(localStorage.getItem("endpoint"));
let api = ApiPromise.create({ provider: wsProvider });

export default api;

