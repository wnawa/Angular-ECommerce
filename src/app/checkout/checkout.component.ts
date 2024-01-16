import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cart!: Cart;
  constructor(private cartservice: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }
}
