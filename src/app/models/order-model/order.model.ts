import {Product} from '../product-model/product.model';

export class Order extends Product {
  orderId: number;
  constructor(product: Product, id: number) {
    super();
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.number = product.number;
    this.units = product.units;
    this.orderId = id;
  }

}
