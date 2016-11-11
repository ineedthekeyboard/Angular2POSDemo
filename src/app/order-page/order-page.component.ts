import { Component, OnInit } from '@angular/core';
import {Product} from '../product-model/product.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  pagetitle: String = 'Order Page';
  productsOrdered: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  onProductSelected(product: Product) {
    this.productsOrdered.push(product);
  }
  deleteSelectProduct(product: Product) {
    this.productsOrdered = this.productsOrdered.filter(p => p !== product);
  }

}
