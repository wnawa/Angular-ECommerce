import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart/cart.service';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports:  [CarouselModule],
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
}
