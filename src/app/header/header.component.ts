import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cart!: Cart;
  constructor(private cartservice: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartservice.getCart();
  }
}
