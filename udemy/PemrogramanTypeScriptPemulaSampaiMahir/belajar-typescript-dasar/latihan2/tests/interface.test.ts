import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/person";

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

    it('should support extends interface', () => {
        const employee: Employee = {
            id: '1',
            name: 'Gary',
            division: 'IT'
        }

        console.info(employee);

        const manager: Manager = {
            id: '2',
            name: 'Sanderson',
            division: 'IT',
            numberOfEmployees: 10
        }

        console.info(manager);
    });

    it('should support function in interface', () => {
        interface Person {
            name: string;

            sayHello(name: string): string;
        }

        const person1: Person = {
            name: 'Gary',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${person1.name}`
            }
        }

        // with an arrow function
        const person2: Person = {
            name: 'James',
            sayHello: (name: string) => {
                return `Hello ${name}, my name is ${person2.name}`
            }
        }

        console.info(person1.sayHello('Yan'));
        console.info(person2.sayHello('Yan'));
    });

    it('should support intersection types', () => {
        interface HasId {
            id: string;
        }

        interface HasName {
            name: string;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: '1',
            name: 'Gary'
        };

        console.info(domain)
    });

    it('should support type assertions', () => {
        const person: any = {
            name: 'Gary',
            age: 20
        };

        const person2: Person = person as Person;
        // person2.sayHello('Yan');

        console.info(person2);
    });
});