/**
 * Created by rcarlton1 on 11/9/2016.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {
                name: 'bannana',
                price: 10,
                units: 'lbs'
            }, {
                name: 'mango',
                price: 2,
                units: 'lbs'
            }, {
                name: 'apple',
                price: 12,
                units: 'lbs'
            }, {
                name: 'grape',
                price: 5,
                units: 'kg'
            }
        ];
        return { products };
    }
}
