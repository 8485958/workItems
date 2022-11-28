import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks:Task[] = [{title:'bug',name:'באגים'},{title:'task',name:'משימות'},{title:'case',name:'תסריטים'},{title:'todo',name:'מטלות'}]

}
