import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopathRoutingModule } from './nopath-routing.module';
import { NopathComponent } from './nopath.component';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [NopathComponent],
  imports: [
    CommonModule,
    NopathRoutingModule,
    MatButtonModule
  ]
})
export class NopathModule { }
