const EthrDID = require("ethr-did");
const Web3 = require("web3");

const keypair = EthrDID.createKeyPair();

console.log("keypair is: ", keypair);
const ethrDid = new EthrDID({ ...keypair, provider: Web3.currentProvider });

console.log("ethrDid is: ", ethrDid);

// const ethrDid = new EthrDID({address: '0x...', privateKey: '...', provider})
