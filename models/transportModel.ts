export default class TransportModel
{
    account:string;
    eth_address:string;
    quantity:string;
    chain_id:number;  
    claimed:number;  
    id:number;  
    time:number;  
    signatures:any[];  
    oracles:string[];  
    constructor(data?:any)
    { 
        if(!data)return;
        Object.assign(this,data);
    }
}
 
  