export default class ConfigModel
{
    contract:string;
    hyperionUrl:string;
    EVMUrl:string;
    EVMSSocketUrl:string;
    oracleAccount:string;
    oraclePrivateKey:string;
    symbol:string;
    precision:number;
    EVMContract:string;
    EVMContractPrivateKey:string;
    constructor(data:{
        contract:string;
        hyperionUrl:string;
        EVMUrl:string;
        EVMSSocketUrl:string;
        oracleAccount:string;
        oraclePrivateKey:string;
        symbol:string;
        precision:number;
        EVMContract:string;
        EVMContractPrivateKey:string;
    })
    {
        Object.assign(this,data);
    }
}