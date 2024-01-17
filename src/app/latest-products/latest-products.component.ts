import { Component,Input ,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports:  [SlickCarouselModule],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css'
})
export class LatestProductsComponent {
  @Input()count :any;
  OnInit(){}
  //start services Model Lecture 14
  pruductArr: Product[]=[];
  /////////Injection
  constructor(
    private productServices: ProductServices,
    private cartservice: CartService
  ) {
    this.productServices.getAllProducts().then((productList: Product[]) => {
      this.pruductArr = productList;
    });
   
    // this.count="";
  }
  // slideConfigLogos = {
  //   accessibility: true,
  //   dots: false,
  //   slidesToShow: this.count,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  //   isFinite: true,
  //   arrows: true,  
  //     responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1008,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
  //   prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>'
  // };
}
