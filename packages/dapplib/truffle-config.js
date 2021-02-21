require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food manage reward stick unveil half civil army gift'; 
let testAccounts = [
"0x554148b04f84f5704cc0c7352fc3e008b5fa2ce577587912c283a8ddd6969e9e",
"0xa2d264f108497b3973d75183be96f5e15e68aac1da54c2de26b602cd4109017f",
"0x72e3dfe16bcd917b8de4dee083bb507579c6e8e3df8461c51c943e06ca3121c7",
"0x91cd09cb2c61f6350c0d0392bbbd280b56ee406b99399683dac295d1bd3e0fb4",
"0x2e8d6ed1f22389023e580deba65bcca9eb0ab5309a5d42a059a6b5b95cccbcce",
"0x58e05b937bbb9e30b1e925451a2d79935e2f1c15083c73ca037bae9f62a53a6e",
"0x3c1e47f18fa1ac1292246e733f36bd18848ac3d8d495b876263f784f3df4a8b3",
"0xe1eb2da12917cdfebe5884950dd527c342010a1202a4c3ed24adb643bdfb1aca",
"0x540a5d98bbfe7c0b9e38ce755ba3bc328b28988f83da500c6a9ad90822cbc37a",
"0xdf0ab7e6d92634781d4487b2af8a1a6122f09e337fe5ff880e13a5aac09c1881"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
