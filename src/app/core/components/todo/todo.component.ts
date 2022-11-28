import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugService } from '../../services/workItems.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private bugService:BugService) { }
  todo:any;
  ngOnInit(): void {
    let i = this.route.snapshot.paramMap.get('todo');
    this.todo = this.bugService.getTodoById(i);
  }

}
