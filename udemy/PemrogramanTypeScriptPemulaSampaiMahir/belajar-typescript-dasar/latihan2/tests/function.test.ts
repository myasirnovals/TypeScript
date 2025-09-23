describe('Function', () => {
    it('should support in typescript', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Gary')).toBe('Hello Gary');

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello('Gary');
    });

    it('should support default value', () => {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Gary')).toBe('Hello Gary');
    });

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello('Gary')).toBe('Hello Gary');
        expect(sayHello('Gary', 'Sanderson')).toBe('Hello Gary Sanderson');
    });

    it('should support function overloading', () => {
        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 10;
            } else {
                return 'Unknown';
            }
        }

        expect(callMe('Gary')).toBe('GARY');
        expect(callMe(10)).toBe(100);
    });

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('Gary', toUpper)).toBe('Hello GARY');

        expect(sayHello('Sanderson', function (name: string): string {
            return name.toUpperCase();
        })).toBe('Hello SANDERSON');

        expect(sayHello('Gary', (name: string) => name.toUpperCase())).toBe('Hello GARY');
    });
});