import { Component,Input ,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports:  [SlickCarouselModule,CommonModule,RouterLink],
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
  addCartItem(product: Product) {
    this.cartservice.addToCart(product);
  }
}
