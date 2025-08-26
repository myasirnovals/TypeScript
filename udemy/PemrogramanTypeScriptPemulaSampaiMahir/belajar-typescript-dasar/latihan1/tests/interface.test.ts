import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: '1234567890',
            npwp: '1234567890'
        };

        seller.name = 'Toko TOko'

        console.info(seller);
    });
});