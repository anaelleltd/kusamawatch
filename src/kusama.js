import { default_endpoint } from "./config.js";

//Define Endpoint
const endpoint = localStorage.getItem("endpoint");
if (!endpoint || typeof endpoint !== "string" || endpoint.indexOf("ws") !== 0) {
  localStorage.setItem("endpoint", default_endpoint);
}

//Instantiate API
const { ApiPromise, WsProvider } = require("@polkadot/api");
const wsProvider = new WsProvider(localStorage.getItem("endpoint"));
let api = ApiPromise.create({ provider: wsProvider });

//Make API object available
export default api;

