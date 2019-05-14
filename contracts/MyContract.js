// const DidRegistryContract = require("ethr-did-registry");

// const Contract = require("truffle-contract");
// let DidReg = Contract(DidRegistryContract);
// DidReg.setProvider(web3.currentProvider);
// let didReg = DidReg.deployed();

// let networkId = 1; // Mainnet
// let DidReg = web3.eth.contract(DidRegistryContract.abi);
// let didReg = DidReg.at(DidRegistryContract.networks[networkId].address);

const registryArtifact = require("uport-registry");
const Contract = require("truffle-contract");
const Registry = Contract(registryArtifact);
Registry.setProvider(web3prov);
let registry = Registry.deployed();

let key = "7334f7a03085d0161d26dd9875840013f5c4aa9b883c7144a5b23297f66c0741"; // a string (bytes32) value used for namespacing
let subject = 0x537c61bc98655db05fbed0914025bc0eb227c5c1; // an address, if you want to register something to
// your own identity you should use your own address.
let value = "0x537c61bc98655db05fbed0914025bc0eb227c5c1"; // a string (bytes32), the data you want to register.
// Could be an ipfs hash for example.
registry.set(key, subject, value);
console.log(registry.set(key, subject, value););