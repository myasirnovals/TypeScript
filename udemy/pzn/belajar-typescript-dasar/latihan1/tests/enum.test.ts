import {Customer, CustomerType} from "../src/enum";

describe('Enum', () => {
    it('should support in typescript', () => {
        const customer: Customer = {
            id: 1,
            name: "Yan",
            type: CustomerType.GOLD
        };

        console.info(customer);
    });
});