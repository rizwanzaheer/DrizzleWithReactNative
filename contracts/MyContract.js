const DidRegistryContract = require("ethr-did-registry");

const Contract = require("truffle-contract");
let DidReg = Contract(DidRegistryContract);
DidReg.setProvider(web3.currentProvider);
let didReg = DidReg.deployed();

let networkId = 1; // Mainnet
let DidReg = web3.eth.contract(DidRegistryContract.abi);
let didReg = DidReg.at(DidRegistryContract.networks[networkId].address);
