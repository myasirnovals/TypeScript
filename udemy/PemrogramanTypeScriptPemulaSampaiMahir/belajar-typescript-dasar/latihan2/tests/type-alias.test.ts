import {Category, Product} from "../src/type-alias";

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: '1',
            name: 'Handphone'
        };

        const product: Product = {
            id: 1,
            name: 'Samsung s20',
            price: 100000,
            category: category
        };

        console.info(category);
        console.info(product);
    });
});