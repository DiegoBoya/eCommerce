import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  shopingCart: Product[] = [];
  totalPrice: number = 0;


  addToShoppingCart(product: Product){
    console.log(`se agrega al carrito el`,product)
    this.shopingCart.push(product);
  }

  getShoppingCart(){
    return this.shopingCart;
  }

  getTotalPrice(){
    return this.totalPrice = this.shopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
