import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
  } ;

  @Output() addProductEmitter = new EventEmitter<Product>();

  onAddProductToCart(){
    this.addProductEmitter.emit(this.product)
  }

}
