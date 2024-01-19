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
  //Function READ Cart Items
  getCart(): Cart {
    return this.cart;
  }

  //Add to cart CREATE new Product  or update quantity
  addToCart(product: Product, quantity: number = 1) {
    const existCartItem = this.cart.items.find(
      (cartitem) => cartitem.product.id == product.id
    );
    existCartItem
      ? (existCartItem.quantity += quantity)
      : this.cart.items.push(this.createCartItem(product, quantity));
  }

  // Create cart item for single product page
  createCartItem(product: Product, quantity: number) {
    let cartItem = new CartItem(product);
    cartItem.quantity = quantity;
    return cartItem;
  }

  //UPDATE cart Quantity
  updateQuantitiy(cartItemId: number, Qty: number): Cart {
    this.cart.items.find((cartItem) => {
      if (cartItem.id == cartItemId) cartItem.quantity = Qty;
    });
    return this.cart;
  }

  //DELETE cart item
  deleteCartItemById(cartItemId: number): Cart {
    var removeIndex = this.cart.items
      .map((cartItem) => cartItem.id)
      .indexOf(cartItemId);
    ~removeIndex && this.cart.items.splice(removeIndex, 1);
    return this.cart;
  }
}
