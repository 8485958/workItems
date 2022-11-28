import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoesService } from 'src/app/services/todoes.service';
import { BugService } from '../../services/workItems.service';
import { UsersService } from '../../services/users.service';
import { DirtyService } from '../../services/dirty.service';
import { Massege } from '../../models/massege';

@Component({
  selector: 'app-todo-creating',
  templateUrl: './todo-creating.component.html',
  styleUrls: ['./todo-creating.component.css']
})
export class TodoCreatingComponent implements OnInit {

  constructor( private dirtyService: DirtyService,private bugService:BugService,private router:Router,private route:ActivatedRoute,private usersService:UsersService) { }

 

  todo!:any
  isCreate:boolean = false
  ngOnInit(): void {
    let i = this.route.snapshot.paramMap.get('id');
    this.todo = this.bugService.getTodoById(i);
    if(i === null || i === undefined){
      this.isCreate = true
      this.id = this.bugService.getTodoes().length;
      console.log(this.id);
    }
    else{

      this.title = this.todo.title;
      this.body = this.todo.body;
      this.type = this.todo.type;
      this.createdBy = this.todo.createdBy;
      this.assignedTo = this.todo.assignedTo;
    }
    
  }
  id = 0;
  title = '';
  body = '';
  type = '';
  createdBy = '';
  assignedTo = '';
  users  = this.usersService.getUsers()
  addTodo():void{
    this.bugService.addTodo(new Todo(this.id++,this.title,this.body,this.type,this.createdBy,this.assignedTo));
    this.router.navigate(['bug'])
  }
  updateTodo(): void{
    this.bugService.updateTodo(this.todo.id,(new Todo(this.todo.id,this.title,this.body,this.type,this.createdBy,this.assignedTo)))
    this.dirtyService.dirty[0] = false
    this.router.navigate(['bug'])
  }
  saveChanges(){
    this.dirtyService.dirty[0] = true
    this.bugService.savedWorkItem(new Todo(this.id++,this.title,this.body,this.type,this.createdBy,this.assignedTo))
  }
}
