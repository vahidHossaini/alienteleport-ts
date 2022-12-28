 
export default class StorageModel 
{ 
    teleportTable:string; 
    evm:number=0;
    evmteleport:number=0; 
    constructor(data?:any)
    { 
        if(!data)return;
        Object.assign(this,data);
    }
}