import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { TodoCreatingComponent } from './components/todo-creating/todo-creating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TodoComponent } from './components/todo/todo.component';
import { DirtyService } from './services/dirty.service';
import { Massege } from './models/massege';


@NgModule({
  declarations: [
    CoreComponent,
    TodoCreatingComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    DirtyService
  ]
})
export class CoreModule { }
