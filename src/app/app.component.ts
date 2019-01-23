import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  home: boolean;

  constructor(private router:Router) {
    this.router.events.subscribe((res) => {
        this.home = this.getRoute();
    })
  }

  getRoute(){
    if (this.router.url === '/' || this.router.url === '/home'){
      return true;
    } else {
      return false;
    }
  }

  
  
  
}
