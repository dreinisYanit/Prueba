import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CacheService } from 'src/app/services/cache.service';
import { InfiniteComponent } from './infinite.component';

interface IntersectionEntry extends IntersectionObserverEntry {
  readonly boundingClientRect: DOMRectReadOnly;
  readonly intersectionRatio: number;
  readonly intersectionRect: DOMRectReadOnly;
  readonly isIntersecting: boolean;
  readonly rootBounds: DOMRectReadOnly | null;
  readonly target: HTMLImageElement;
  readonly time: number;
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lazy]',
})
export class IntersectionObserverDirective implements OnInit {
  //@Input() image?: string;
  //@Input() call?: () => {};
  @Input() index: number;
  //@Input() lenght: number;

  private options: IntersectionObserverInit = {
    rootMargin: '10px 0px',
    threshold: 1, //PORCENTAJE MOSTRADO AL DOM [0,1];
  };

  constructor(private el: ElementRef, private cache:CacheService) {}

  ngOnInit(): void {
    this.intersectionObserver();
  }

  private intersectionObserver(): void {
    const intersection: IntersectionObserver = new IntersectionObserver(
      this.callback,
      this.options
    );

    intersection.observe(this.el.nativeElement);
  }

  private callback: IntersectionObserverCallback = (
    entries: IntersectionEntry[],
    observer: IntersectionObserver
  ) => {
    //this.lazyImages(entries, observer);
    this.lazyCalls(entries, observer);
  };

  /*private lazyImages(
    entries: IntersectionEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry: IntersectionEntry) => {
      if (entry.isIntersecting && this.image) {
        entry.target.src = this.image;
        observer.unobserve(entry.target);
      }
    });
  }*/

  private lazyCalls(
    entries: IntersectionEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry: IntersectionEntry) => {
      //VALIDACION
      /*if (entry.isIntersecting && this.call) {
        this.call(); 
        console.log('Peticion enviada');
        observer.unobserve(entry.target);
      }*/
      if(this.index == this.cache.infiniteList.length) {
        if (entry.isIntersecting && this.index < this.cache.infiniteInfo.count) {
          this.cache.addContent(); 
          console.log('Peticion enviada');
          observer.unobserve(entry.target);
        }
      }
      
    });
  }
}
