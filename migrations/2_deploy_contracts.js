// const ENS = artifacts.require("ens/ENS");
// const MyContract = artifacts.require("MyContract");
const MyStringStore = artifacts.require("MyStringStore");

// module.exports = function(deployer) {
//   // Only deploy ENS if there's not already an address already.
//   // i.e., don't deploy if we're using the canonical ENS address,
//   // but do deploy it if we're on a test network and ENS doesn't exist.
//   deployer.deploy(ENS, { overwrite: false }).then(function() {
//     return deployer.deploy(MyContract, ENS.address);
//   });
// };

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
};
