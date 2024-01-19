import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule, RouterLink],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css',
})
export class LatestProductsComponent {
  //Getting value on Courasoul setting from parent components
  @Input({ required: true }) count: any;
  //Writing back to product details page
  @Output() ShowDetailsClicked = new EventEmitter<number>();

  showDetails(productId: number) {
    this.ShowDetailsClicked.emit(productId);
    console.log('details');
  }
  pruductArr: Product[] = [];

  constructor(
    private productServices: ProductServices,
    private cartservice: CartService
  ) {
    this.productServices.getAllProducts().then((productList: Product[]) => {
      this.pruductArr = productList;
    });
  }
  addCartItem(product: Product) {
    this.cartservice.addToCart(product);
  }
}
