import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreatingComponent } from './components/todo-creating/todo-creating.component';
import { TodoComponent } from './components/todo/todo.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'todoCreating/:id', component: TodoCreatingComponent },
  { path: 'bugs/:todo', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
