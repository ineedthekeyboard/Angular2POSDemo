import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product-model/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products: Product[];
  searchTerm: string;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  search(term: string): void {
    let searchForTerm = () => {
      //clearly this code is really bad for production, devise a service to handle search later.
      this.productsService.getProducts().then((products) => this.products = products.filter(p => p.name.indexOf(this.searchTerm) > -1));
    }
    this.searchTerm = term;
    if (this.searchTerm === '' || !this.searchTerm) {
      this.products = [];
      return;
    }
    this.debounce(searchForTerm(), 350, null);
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
