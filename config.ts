import ConfigModel from "./models/configModel";

 
const dbConnection:string='default';
export default new ConfigModel({ 
    EVMSSocketUrl:'wss://testnet.telos.caleos.io/evm',
    EVMUrl:'https://testnet.telos.caleos.io/evm',
    hyperionUrl:'https://testnet.telos.caleos.io',
    oracleAccount:'{{oracle account}}',
    oraclePrivateKey:'5KJ....',
    precision:4,
    symbol:'DON',
    contract:'testnettoken',
    EVMContract:'0xDbb168a87B6c6c88b8F0F3172c8Cb929CFd53265',
    EVMContractPrivateKey:'1386e....'
});