import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  infiniteList = [];
  infiniteInfo: any;

  constructor(private api:ApiService) { this.preFetchInfinite(); }

  private preFetchInfinite(){
    this.api.get().subscribe(
      data => {
        console.log(data);
        this.infiniteList = data.results;
        this.infiniteInfo = data.info;
    });
  }

  public addContent():void {
    if(this.infiniteInfo != null){
      this.api.getNext(this.infiniteInfo.next).subscribe(
        data => {
          console.log(data);
          data.results.forEach( x => this.infiniteList.push(x));
          this.infiniteInfo = data.info;
      });
    }
  }

}
