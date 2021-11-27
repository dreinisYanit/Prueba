import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopathComponent } from './nopath.component';

const routes: Routes = [
  { 
    path: '', 
    component:NopathComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NopathRoutingModule { }
