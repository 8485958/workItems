import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoesService } from 'src/app/services/todoes.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private todoesService:TodoesService) { }

  todo:any;
  ngOnInit(): void {
    let i = this.route.snapshot.paramMap.get('todo');
    this.todo = this.todoesService.getTodoById(i);
  }


}
