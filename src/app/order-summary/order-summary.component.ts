import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Product} from '../product-model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  productsOrdered: Product[] = [];
  constructor (
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProductsToOrder().then((products) => {this.productsOrdered = products});
  }

  goBack(): void {
    this.router.navigate(['order']);
  }
}
