import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product-model/product.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input() products:Product[];
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor() {}
  ngOnInit() {}

  delete(product: Product) {
    this.deleteProduct.emit(product);
  }

}
