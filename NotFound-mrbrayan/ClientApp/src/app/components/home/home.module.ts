import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';



@NgModule({
  declarations: [HomeComponent, IntersectionObserverDirective],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
