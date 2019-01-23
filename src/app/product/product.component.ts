import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "./assets/img/main-product01.jpg"},
    {img: "./assets/img/main-product02.jpg"},
    {img: "./assets/img/main-product03.jpg"}
  ];
  slideConfig = {"autoplay": true, "arrows": true, "infinite": true, "speed": 300};

  subslides = [
    {img: "./assets/img/main-product01.jpg"},
    {img: "./assets/img/main-product02.jpg"},
    {img: "./assets/img/main-product03.jpg"}
  ];
  subslideConfig = {"autoplay": true, "arrows": true, "infinite": true, "speed": 300, "slidesToShow": 3, "slidesToScroll": 2};

  ngOnInit() {
  }

}
