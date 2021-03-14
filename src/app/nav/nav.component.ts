import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nav:any = {};
  folder:string = "";

  constructor(public scully : ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.list;
  }

  get list(){

    this.scully.available$.subscribe(
      scully => { 
        for(let route of scully){
          //루트 제외
          if(route.route.length != 1){
            this.folder = route.route.split('/')[2];
            if(this.nav[this.folder] == undefined) this.nav[this.folder] = [];
            this.nav[this.folder].push(route.route.split('/')[3]);
          }
        }   
      }
    );  
    console.log(this.nav);
    return this.nav;
  }

}
