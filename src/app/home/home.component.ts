import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "./assets/img/banner01.jpg"},
    {img: "./assets/img/banner02.jpg"},
    {img: "./assets/img/banner03.jpg"}
  ];
  slideConfig = {"autoplay": true, "arrows": true, "infinite": true, "speed": 300};

  ngOnInit() {
    
  }

}
