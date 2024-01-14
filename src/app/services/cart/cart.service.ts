import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Product } from '../../shared/models/Product';
import CartItem from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() {}
  //Add new Product to cart
  addToCart(product: Product) {
   const existCartItem= this.cart.items.find(cartitem => cartitem.product.id == product.id) ;
   (existCartItem)
      ? existCartItem.quantity++   
      : this.cart.items.push(new CartItem(product));
    console.log(this.cart);
  }

  //Function display Cart Items
  getCart(): Cart {
    return this.cart;
  }

  //update cart Quantity
  addQuantitiy(cartItemId: number): Cart {
    console.log(cartItemId);
    this.cart.items.find((cartItem) => {
      if (cartItem.id == cartItemId) cartItem.quantity++;
    });
    return this.cart;
  }

  //delete cart item

 
}
