import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  productId: number =1;
  product: Product | undefined;
  quantity: number = 1;
  constructor(
    private activatedRout: ActivatedRoute,
    private productService: ProductServices,
    private cartservice: CartService
  ) {
    this.activatedRout.params.subscribe((params) => {
      this.productId = Number(params['id']);
      // this.productId == 0 ? (this.quantity = 0) : (this.quantity = 1);

    
    });

    this.productService
    .getProductById(this.productId)
    .then((returnedproduct) => {
      this.product = returnedproduct;
    });
  }

  addCartItem(product: any) {
    this.cartservice.addToCartWithQuantity(product, this.quantity);
  }
}
