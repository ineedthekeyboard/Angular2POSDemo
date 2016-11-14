import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product-model/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products: Product[];
  allProducts: Product[];
  searchTerm: string;
  searchBoxValue: string = '';

  @Output() productSelected: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    //Moved to the service to on init::
    this.productsService.getProducts().then((products) => {this.allProducts = products});
  }

  addProduct(product: Product): void {
    this.productSelected.emit(product);
    this.searchBoxValue = '';
    this.search();
  }
  enterPressedAddProduct(): void {
    let productsFilteredByName: Product[] = this.allProducts.filter(p => p.name.indexOf(this.searchTerm) > -1);
    if (productsFilteredByName.length > 0) {
      this.productSelected.emit(productsFilteredByName[0]);
    }
  }
  
  search(): void {
    let term = this.searchBoxValue;
    let searchForTerm = () => {
      //clearly this code is really bad for production, devise a service to handle search later
      this.products = this.allProducts.filter(p => p.name.indexOf(this.searchTerm) > -1);
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
