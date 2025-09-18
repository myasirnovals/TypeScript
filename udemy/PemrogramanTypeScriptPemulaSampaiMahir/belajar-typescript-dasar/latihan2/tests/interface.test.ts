import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Gary',
            nib: '1234567890',
            npwp: '1234567890'
        }

        console.info(seller);
    });

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number) => {
            return value1 + value2;
        }

        expect(add(2, 2)).toBe(4);
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Gary', 'Yan', 'Rach'];
        console.info(names);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [index: string]: string;
        }

        const dictionary: StringDictionary = {
            'name': 'Gary',
            'address': 'Jakarta'
        }

        expect(dictionary['name']).toBe('Gary');
        expect(dictionary['address']).toBe('Jakarta');
    });
});