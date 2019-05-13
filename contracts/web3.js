// in node.js use: const Web3 = require('web3');

// use the given Provider, e.g in the browser with Metamask, or instantiate a new websocket provider
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546", null, {});

// or
const web3 = new Web3(
  Web3.givenProvider ||
    new Web3.providers.WebsocketProvider("ws://localhost:8546"),
  null,
  {}
);

// Using the IPC provider in node.js
const net = require("net");

const web3 = new Web3("/Users/myuser/Library/Ethereum/geth.ipc", net, {}); // mac os path
// or
const web3 = new Web3(
  new Web3.providers.IpcProvider(
    "/Users/myuser/Library/Ethereum/geth.ipc",
    net,
    {}
  )
); // mac os path
// on windows the path is: '\\\\.\\pipe\\geth.ipc'
// on linux the path is: '/users/myuser/.ethereum/geth.ipc'
