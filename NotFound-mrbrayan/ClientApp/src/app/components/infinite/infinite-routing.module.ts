import { NgModule } from '@angular/core';
import { InfiniteComponent } from './infinite.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InfiniteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteRoutingModule { }
