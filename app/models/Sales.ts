import {Item} from './Item'
export class Sales{
    id:number;
    client:number;
    paid:boolean;
    notices:string;
    date:Date;
    total:number;
    items:Array<Item>;
}