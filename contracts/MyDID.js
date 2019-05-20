const EthrDID = require("ethr-did");
const Web3 = require("web3");
const HttpProvider = require("ethjs-provider-http");
// require("ethr-did-resolver")();
Web3.providers.HttpProvider.prototype.sendAsync =
  Web3.providers.HttpProvider.prototype.send;
const provider = new Web3.providers.HttpProvider("http://localhost:8545");

const didJWT = require("did-jwt");
const resolve = require("did-resolver");
const registerResolver = require("ethr-did-resolver");

// const provider = new HttpProvider("http://localhost:8545");

// registerResolver();

const keypair = EthrDID.createKeyPair();

console.log("keypair is: ", keypair);
const ethrDid = new EthrDID({
  ...keypair,
  provider
  // signer: wallet.jwtSigner
  // provider: Web3.currentProvider
  // address: Web3.eth.defaultAccount
});

console.log("ethrDid is: ", ethrDid.did);
// resolver

// resolve(ethrDid.did).then(doc => console.log("doc is: ", doc));

const signer = didJWT.SimpleSigner(
  "fa09a3ff0d486be2eb69545c393e2cf47cb53feb44a3550199346bdfa6f53245"
);

let jwt = "";
console.log("before jwt is: ");
// didJWT
//   .createJWT(
//     {
//       aud: ethrDid.did,
//       exp: 1957463421,
//       name: "Rizwan Developer"
//     },
//     { issuer: ethrDid.did, signer }
//   )
//   .then(response => {
//     jwt = response;
//     console.log("inside then jwt is: ", jwt);
//   });

didJWT
  .createJWT(
    {
      aud: "did:uport:2osnfJ4Wy7LBAm2nPBXire1WfQn75RrV6Ts",
      exp: 1957463421,
      name: "uPort Developer"
    },
    { issuer: "did:uport:2osnfJ4Wy7LBAm2nPBXire1WfQn75RrV6Ts", signer }
  )
  .then(response => {
    jwt = response;
    console.log("inside then jwt is: ", jwt);
  });

console.log("jwt is: ", jwt);
// setTimeout(() => {
//   const decodejwt = didJWT.decodeJWT(jwt);
//   console.log("decodejwt is: ", decodejwt);

//   // verify jwt // pass the JWT from step 1 & 2
//   // let verifiedRespone = {};

//   // didJWT
//   //   .verifyJWT(jwt, {
//   //     audience: ethrDid.did
//   //   })
//   //   .then(response => {
//   //     console.log("in then is");
//   //     verifiedRespone = response;
//   //     console.log("verifiedRespone is: ", verifiedRespone);
//   //   });

//   // didJWT
//   //   .verifyJWT(jwt, {
//   //     audience: "did:uport:2osnfJ4Wy7LBAm2nPBXire1WfQn75RrV6Ts"
//   //   })
//   //   .then(response => {
//   //     verifiedRespone = response;
//   //     console.log("verifiedRespone is: ", verifiedRespone);
//   //   });

//   // console.log(verifiedRespone);
// }, 2000);

// (async function() {
//   try {
//     const data = await ethrDid.createSigningDelegate();
//     console.log("data is: ", data);
//   } catch (error) {
//     console.log("in catch error is: ", error);
//   }
// })();

// const ethrDid = new EthrDID({address: '0x...', privateKey: '...', provider})

setTimeout(() => {
  (async function() {
    const helloJWT = await ethrDid.signJWT({ hello: "Hello Rizwan" });

    // console.log("hello JWT is: ", jwt);

    // A uPort compatible verification
    const verification = await ethrDid.signJWT({
      claims: { name: "Rizwan Zaheer" }
    });
    // console.log("verification is: ", verification);
    // const claim = await ethrDid.verifyJWT(verification);
    // console.log("claim is: ", claim);

    const jwt =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1MzE4Mjk5NzUsImF1ZCI6ImRpZDpldGhyOltvYmplY3QgT2JqZWN0XSIsImV4cCI6MTk1NzQ2MzQyMSwibmFtZSI6InVQb3J0IERldmVsb3BlciIsImlzcyI6ImRpZDpldGhyOltvYmplY3QgT2JqZWN0XSJ9.Mralpbz1Lo7DRsrWX7EYvtKDr8NAJWnf0Mgt4y8Eyu-WDNEHmZFwsTw_vG09zYGCM38RHEPeRTftRIYL__WMPg";

    const { payload, issuer } = didJWT.verifyJWT(jwt);
    // payload contains the JavaScript object that was signed together with a few JWT specific attributes
    console.log(`payload is: ${payload}`);

    // Issuer contains the DID of the signing identity
    console.log("issuer is: ", issuer);
  })();
}, 500);
