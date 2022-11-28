import { Todo } from "src/app/models/todo"

export class Massege {
    todo!:Todo
    body!:string
    addres!:string
    constructor(todo:Todo,body:string,addres:string){
        this.todo = todo;
        this.body = body;
        this.addres =  addres;
    }
}
