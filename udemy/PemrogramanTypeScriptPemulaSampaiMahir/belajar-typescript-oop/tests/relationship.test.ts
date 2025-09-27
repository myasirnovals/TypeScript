describe('Relatiionship', () => {
    class Person {
        constructor(public name: string) {
        }
    }

    class Customer {
        constructor(public name: string) {
        }
    }

    it('should support', () => {
        const person = new Customer('John');
        console.info(person.name);
    });
});