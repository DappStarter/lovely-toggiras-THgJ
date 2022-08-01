require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife off suggest name riot rural undo harvest narrow fresh general'; 
let testAccounts = [
"0x5ce538f3eee42ed482a796fa30d250ff88798565a1e43415db4675ae8354bb95",
"0xfd30c9ad8ab6cceaf049de2652fb22e3abb249985ba0818b03fa52e89f2b8640",
"0x3a732788cac8c8fd06e3135a08ee84dca562c9a98ad25e925e41f88c0ed1662c",
"0x860859a9da4d9fe6bdcb0d92dcb75dae3cbdbd0b8e335034f0233315ab75a622",
"0x2118b93f7865441611a9763feef9f049e427cdc527baddb6d19325c816118f53",
"0x606aa5121f1abc7b6c0c5e96143222317381bc8a711e364ef0c52bf489cdc8fe",
"0xd269c91b0a862b2c3ea7e9d4093654a95ffe8fe49a1359ee19d2b83500bd56cb",
"0x2a9805637ac98e590530b105ea9d6498621e2027b7c9dd58d3432f6c919bc99e",
"0x57fefba202ba5b1d249e5bd712cb4c0b4e36efe979d0fd8bb884ecff98e5e4cd",
"0x38d77b5223a094e6a625a31ccc72214a370c9ec738a9913bb6071440e4d94dd0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


