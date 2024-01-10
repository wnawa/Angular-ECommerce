import { Product } from './Product';

export default class CartItem {
  id!: number;
  product!: Product;
  quantity: number = 1;
  constructor(product: Product) {
    this.product = product;
    this.price;
  }
  get price(): number {
    return this.product.Price * this.quantity;
  }
}
