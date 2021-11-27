import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty, ViewChild  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IntersectionStatus } from './form-intersection-observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  info; fetch = []; ant:string;
  list = [];
  visibilityStatus: {[key: number]: IntersectionStatus} = {};
  intersectionStatus = IntersectionStatus;

  constructor(private api:ApiService) {
    this.api.get().subscribe(
      data => {
        this.list = data.results;
        this.info = data.info;
      }
    );
  }
  
  ngOnInit() {
    //this.list.push(0);
    /*for (let n = 0; n < 1; n++) {
      this.list.push(n);
    }*/
  }
  
  onVisibilityChanged(index: number, status: IntersectionStatus) {
    //console.log(index);
    if(index == this.list.length && index < this.info.count)
      this.api.getNext(this.info.next).subscribe(
        data => {
          console.log(data);
          data.results.forEach(x => this.list.push(x));
          this.ant = this.info.next;
          this.info = data.info;
        }
      );
    /*if(this.list.length < this.info.count){
      this.api.getNext(this.info.next).subscribe(
        data => {
          console.log(data);
          data.results.forEach(x => this.list.push(x))
          this.info = data.info;
        }
      );
    }*/
    this.visibilityStatus[index] = status;
    //status = IntersectionStatus.Visible;
  }
  
  trackByIndex(index: number) {
    return index;
  }

}