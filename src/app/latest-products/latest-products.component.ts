import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart/cart.service';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports:  [CarouselModule,SlickCarouselModule],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css'
})
export class LatestProductsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth:true,
    autoHeight:true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
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
   
  }
  slideConfigLogos = {
    accessibility: true,
    dots: false,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,  
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>'
  };
}
