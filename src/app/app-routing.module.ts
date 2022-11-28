import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { StartComponent } from './ff/features/components/start/start.component';
import { FeaturesComponent } from './ff/features/features.component';

const routes: Routes = [
  
  { path: 'features/dashboard', loadChildren: () => import('./ff/features/features.module').then(m => m.FeaturesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
