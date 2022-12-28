import StorageModel from "./models/storageModel";
import fs from 'fs';
export default class StorageService
{
    static defaultTime:string='2018-07-08T00:00:00.000Z';
    static async Get():Promise<StorageModel>
    {
       var time=  new StorageModel({}) ;
       if(fs.existsSync('time.txt'))
       {
            time=new StorageModel(JSON.parse(fs.readFileSync('time.txt')+'')) 
       }
       return time;
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