import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteComponent } from './infinite.component';
import { InfiniteRoutingModule } from './infinite-routing.module';
import { IntersectionObserverDirective } from './intersection-observer.directive';



@NgModule({
  declarations: [InfiniteComponent, IntersectionObserverDirective],
  imports: [
    CommonModule,
    InfiniteRoutingModule
  ]
})
export class InfiniteModule { }
