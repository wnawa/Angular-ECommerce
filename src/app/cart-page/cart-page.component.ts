import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { RouterLink } from '@angular/router';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartservice: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }
  // updateQuantitiy(cartItemId: number,qty) {
  //   this.cart = this.cartservice.updateQuantitiy(cartItemId,qty);

  // }
  deleteCartItemById(cartItemId: number){
    this.cart = this.cartservice.deleteCartItemById(cartItemId);

  }

}
