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
    window.scrollTo(0, 0);
  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }
  updateQuantitiy(cartItemId: number,quantity:string) {
    this.cart = this.cartservice.updateQuantitiy(cartItemId,Number(quantity));

  }
  deleteCartItemById(cartItemId: number){
    this.cart = this.cartservice.deleteCartItemById(cartItemId);

  }

}
