import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { StartComponent } from './components/start/start.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BugComponent } from './components/bug/bug.component';
import { TodoRowComponent } from '../../core/components/todo-row/todo-row.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    FeaturesComponent,
   StartComponent,
   TasksComponent,
   BugComponent,
   TodoRowComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class FeaturesModule { }
