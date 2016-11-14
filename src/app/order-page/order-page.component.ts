import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {Product} from '../product-model/product.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  pagetitle: String = 'Order Page';
  productsOrdered: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productsService.getProductsToOrder().then((products) => {this.productsOrdered = products || []});
  }

  onOrder(): void {
    this.productsService.createProductsToOrder(this.productsOrdered).then(() => {
      this.router.navigate(['ordersummary']);
    });
  }

  onProductSelected(product: Product) {
    //TODO: Check that the product is not already added.
    product.number = 1;//Make only one added now
    this.productsOrdered.push(product);
  }
  deleteSelectProduct(product: Product) {
    this.productsOrdered = this.productsOrdered.filter(p => p !== product);
  }

}
