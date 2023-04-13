import ConfigModel from "./models/configModel";

 
const dbConnection:string='default';
export default new ConfigModel({ 
    EVMSSocketUrl:process.env.EVMSOCKETURL ,//'wss://testnet.telos.caleos.io/evm',
    EVMUrl:process.env.EVMURL ,//'https://testnet.telos.caleos.io/evm',
    hyperionUrl:process.env.HYPERIONURL ,//'https://testnet.telos.caleos.io',
    oracleAccount:process.env.ORACLEACCOUNT ,//'{{oracle account}}',
    oraclePrivateKey:process.env.ORACLEPK ,//'5KJ....',
    precision:parseInt(process.env.PRECISION)  ,//4,
    symbol:process.env.SYMBOL ,//'DON',
    contract:process.env.CONTRACT ,//'testnettoken',
    EVMContract:process.env.EVMCONTRACT ,//'0xDbb168a87B6c6c88b8F0F3172c8Cb929CFd53265',
    EVMContractPrivateKey:process.env.EVMCONTRACTPK ,//'1386e....'
    chainId:process.env.CHAINID
});