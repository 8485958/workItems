import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from 'src/app/core/services/workItems.service';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {

  constructor(private bugService:BugService,private router:Router,private bugsService:BugService) {
    
  }

  ngOnInit(): void {
  }

 

  addTodo(){
    this.router.navigate(["todoCreating"]);
  }
  displayedColumns: string[] = ['id', 'title', 'body', 'createdBy', 'favorite', 'delete', 'ditels', 'edit'];
  listBugs:Todo[]= this.bugService.getTodoes()
  todoInfo(todo:Todo){
    this.router.navigate(["bugs",todo.id])
  }

  deleteTodo(todo:Todo):void{
    this.bugsService.deleteTodo(todo.id);
  }
  editTodo(todo:Todo){
    this.router.navigate(["todoCreating",todo.id])
  }
}
