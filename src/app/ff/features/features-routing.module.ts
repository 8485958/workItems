import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from '../../components/todo/todo.component';
import { TodoCreatingComponent } from '../../core/components/todo-creating/todo-creating.component';
import { BugComponent } from './components/bug/bug.component';
import { StartComponent } from './components/start/start.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path:'bug',component:BugComponent},
  {path:'start',component:StartComponent},
  {path:'tasks',component:TasksComponent},
  {path:'todo',component:TodoComponent},
  {path:'todoCreating',component:TodoCreatingComponent},
  { path: "",  redirectTo: 'features/dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
