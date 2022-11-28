export class Todo {
    id!:number;
    title!:string;
    body!:string;
    type!:string;
    createdBy!:string;
    assignedTo!:string;
    constructor(id:number,title:string,body:string,type:string,createdBy:string,assignedTo:string){
        this.id = id;
        this.title = title;
        this.body = body;
        this.type = type;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
    }
}

export enum Type {
    important,
    urgent,
    standard
}