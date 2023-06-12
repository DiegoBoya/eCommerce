import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private shopingCart: Product[] = [];
  private totalPrice: number = 0;
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  addToShoppingCart(product: Product){
    console.log(`se agrega al carrito el`,product)
    this.shopingCart.push(product);
    this.myCart.next(this.shopingCart);
  }

  getShoppingCart(){
    return this.shopingCart;
  }

  getTotalPrice(){
    return this.totalPrice = this.shopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
