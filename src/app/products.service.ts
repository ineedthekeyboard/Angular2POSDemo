import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Product } from "./product-model/product.model";

@Injectable()
export class ProductsService {

  private productUrl = 'app/products';
  private orderProductsUrl = 'app/productsOrdered';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(
    private http: Http
  ) { }
  create(product: Product): Promise<Product> {
    return this.http
      .post(this.productUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  getProducts(): Promise<Product[]> {
    return this.http.get(this.productUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }
  getProduct(id: number): Promise<Product> {
    return this.getProducts().then((products) => products.find((product) => product.id === id));
  }
  update(product: Product): Promise<Product> {
    const url = `${this.getProduct}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(() => product).catch(this.handleError);
  }
  delete(product: Product): Promise<void> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  createProductsToOrder(products: Product[]): Promise<Product[]> {
    return this.http
      .post(this.orderProductsUrl, JSON.stringify(products), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  getProductsToOrder(): Promise<Product[]> {
    return this.http.get(this.orderProductsUrl)
      .toPromise()
      .then(response => response.json().data[0] as Product[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
