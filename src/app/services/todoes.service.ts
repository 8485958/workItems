import { Injectable } from '@angular/core';
import { BugService } from '../core/services/workItems.service';
import { Todo, Type } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoesService {

  constructor(private bugService:BugService) {
    this.listTodoes = this.bugService.getTodoes()
  }
  listTodoes:Todo[] = []

getTodoes():Todo[]{
  return this.listTodoes;
}
getTodoById(id:any){
  return this.listTodoes.find(t => t.id == id);
}
deleteTodo(id:number):void{
  this.listTodoes.splice(this.listTodoes.findIndex(t => t.id == id),1);
}
addTodo(todo:Todo):void{
  this.listTodoes.push(todo);
  
}
updateTodo(id:number,todo:Todo):void{
  this.listTodoes.splice(this.listTodoes.findIndex(todo => todo.id == id),1);
  this.listTodoes.push(todo);
}
}
