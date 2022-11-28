import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { BugService } from '../../services/workItems.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.css']
})
export class TodoRowComponent implements OnInit {

  constructor(private router:Router,private bugsService:BugService) { }

  ngOnInit(): void {
  }
  @Input() todo!:Todo;

  todoInfo(){
    this.router.navigate(["bugs",this.todo.id])
  }

  deleteTodo():void{
    this.bugsService.deleteTodo(this.todo.id);
  }
  editTodo(){
    this.router.navigate(["todoCreating",this.todo.id])
  }
 
}
