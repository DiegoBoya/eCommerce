import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent {

  constructor(private storeService: StoreService,
              private productService: ProductService)  {
      this.shoppingCart = this.storeService.getShoppingCart();
     }

  products : Product[] = [];
  shoppingCart: Product[];
  totalPrice:number = 0;

  ngOnInit():void{
    this.productService.getAllProducts().subscribe(data => this.products = data);
  }

  onAddToShoppingCart(product: Product){
   this.storeService.addToShoppingCart(product);
   this.totalPrice = this.storeService.getTotalPrice();
  }

}
