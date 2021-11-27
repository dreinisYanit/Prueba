import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.component.html',
  styleUrls: ['./infinite.component.css']
})
export class InfiniteComponent implements OnInit {

  cache:CacheService;

  constructor(private _cache:CacheService) { 
    this.cache = _cache;
  }

  ngOnInit(): void {
  }

}
