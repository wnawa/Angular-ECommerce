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

  // cartItemId=1;
  constructor(private cartservice: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }
  addQuantitiy(cartItemId: number) {
    this.cart = this.cartservice.addQuantitiy(cartItemId)

  }
  // addQuantitiy(cartItemId: number) {
  //   console.log(cartItemId);
  //   this.cart.items.find((cartItem) => {
  //     if (cartItem.id == cartItemId) cartItem.quantity++;
  //   });
  // }
}
