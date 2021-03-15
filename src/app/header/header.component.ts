import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  all:number = 0;

  constructor(public scully : ScullyRoutesService) { }

  ngOnInit(): void {
    this.scully.available$.subscribe(
      scully => { 
        this.all = scully.length - 1;
      }
    ); 
  }

}
