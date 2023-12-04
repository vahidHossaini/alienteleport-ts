import StorageModel from "./models/storageModel";
import fs from 'fs';
export default class StorageService
{
    // Changed to Process Environment for Static Time using format 2018-07-08T00:00:00.000Z
    static defaultTime:string=process.env.DFLT_TIME;
    static async Get():Promise<StorageModel>
    {
       var time=  new StorageModel({}) ;
       if(fs.existsSync('time.txt'))
       {
            time=new StorageModel(JSON.parse(fs.readFileSync('time.txt')+'')) 
       }
       // Returing time from Process Environment using format 2018-07-08T00:00:00.000Z
       return new StorageModel(JSON.parse(process.env.DFLT_TIME+''));
    }
    static async Save(name:string,value:any)
    { 
        var time=  new StorageModel({}) ;
        if(fs.existsSync('time.txt'))
        {
             time=new StorageModel(JSON.parse(fs.readFileSync('time.txt')+'')) 
        }
        time[name]=value;
        fs.writeFileSync('time.txt',JSON.stringify(time)) 
    }
}
