/**
 * Created by rcarlton1 on 11/9/2016.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {
                id:1,
                name: 'bannana',
                price: 10,
                units: 'lbs'
            }, {
                id:2,
                name: 'mango',
                price: 2,
                units: 'lbs'
            }, {
                id:3,
                name: 'apple',
                price: 12,
                units: 'lbs'
            }, {
                id:4,
                name: 'grape',
                price: 5,
                units: 'kg'
            }
        ];
        return { products };
    }
}
