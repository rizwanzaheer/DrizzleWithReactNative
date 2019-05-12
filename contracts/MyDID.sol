// mapping(address => uint256) public linkIds;


// function linkIds(address _address) public view returns (uint256)

// // Web3
// const addressA = '0xabc123...'
// const addressB = '0xdef456...'
// accountRegistry = AccountRegistryLogic.at("0x123...")
// const linkA = accountRegistry.linkIds.call(addressA)
// const linkB = accountRegistry.linkIds.call(addressB)
// if (linkA === linkB && linkA !== 0) {
//   // Addresses are linked
// }


// /**
//  * @notice Add an address to an existing id by a user
//  * @param _newAddress Address to add to account
//  * @param _newAddressSig Signed message from new address confirming ownership by the sender
//  * @param _senderSig Signed message from new address confirming intention by the sender
//  * @param _nonce Random hex string used when generating sigs to make them one time use
//  */
// function linkAddresses(
//   address _currentAddress,
//   bytes _currentAddressSig,
//   address _newAddress,
//   bytes _newAddressSig,
//   bytes32 _nonce
//   ) public;

  




// const getFormattedTypedDataAddAddress = (
//   contractAddress: string,
//   chainId: number,
//   addressToAdd: string,
//   nonce: string,
// ): IFormattedTypedData => {
//   return {
//     types: {
//       EIP712Domain: [
//           { name: 'name', type: 'string' },
//           { name: 'version', type: 'string' },
//           { name: 'chainId', type: 'uint256' },
//           { name: 'verifyingContract', type: 'address' },
//       ],
//       AddAddress: [
//         { name: 'addressToAdd', type: 'address'},
//         { name: 'nonce', type: 'bytes32'},
//       ]
//     },
//     primaryType: 'AddAddress',
//     domain: {
//       name: 'Bloom Account Registry',
//       version: '2',
//       chainId: chainId,
//       verifyingContract: contractAddress,
//     },
//     message: {
//       addressToAdd: addressToAdd,
//       nonce: nonce
//     }
//   }
// }

// //Web3 pseudocode
// registryLogic = AccountRegistryLogic.at("0x123...")
// nonce = sha3(uuid())

// newAddressLinkSig = ethSigUtil.signTypedData(unclaimedPrivkey, {
//   data: getFormattedTypedDataAddAddress(registryLogicAddress, 1, alice, nonce)
// })

// currentAddressLinkSig = ethSigUtil.signTypedData(alicePrivkey, {
//   data: getFormattedTypedDataAddAddress(registryLogicAddress, 1, unclaimed, nonce)
// })

// registryLogic.linkAddresses(
//   alice,
//   currentAddressLinkSig,
//   unclaimed,
//   newAddressLinkSig,
//   nonce,
//   {from: anyone}
// )



// ==================
// Solidity example from AccountRegistryLogic -> linkAddresses
bytes32 _signatureDigest = generateAddAddressSchemaHash(_addressToAdd, _nonce);
require(_currentAddress == recoverSigner(_signatureDigest, _linkSignature));

// Web3
export const getFormattedTypedDataAddAddress = (
  contractAddress: string,
  chainId: number,
  addressToAdd: string,
  nonce: string,
): IFormattedTypedData => {
  return {
    types: {
      EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
      ],
      AddAddress: [
        { name: 'addressToAdd', type: 'address'},
        { name: 'nonce', type: 'bytes32'},
      ]
    },
    primaryType: 'AddAddress',
    domain: {
      name: 'Bloom Account Registry',
      version: '2',
      chainId: chainId,
      verifyingContract: contractAddress,
    },
    message: {
      addressToAdd: addressToAdd,
      nonce: nonce
    }
  }
}

newAddressLinkSig = ethSigUtil.signTypedData(unclaimedPrivkey, {
  data: getFormattedTypedDataAddAddress(registryLogicAddress, 1, alice, nonce)
})

currentAddressLinkSig = ethSigUtil.signTypedData(alicePrivkey, {
  data: getFormattedTypedDataAddAddress(registryLogicAddress, 1, unclaimed, nonce)
})