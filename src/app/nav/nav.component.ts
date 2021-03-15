import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  folder:any = [];
  posts:any = [];

  constructor(public scully : ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.scully.available$.subscribe(
      scully => { 
        for(let route of scully){
          //루트 제외
          if(route.route.length != 1){
            let f = route.route.split('/')[2];

            if(this.folder.indexOf(f) == -1) this.folder.push(f);
            
            if(this.posts[f] == undefined) this.posts[f] = [];
            this.posts[f].push(route.route.split('/')[3]);
          }
        }   
      }
    ); 
  }

}
