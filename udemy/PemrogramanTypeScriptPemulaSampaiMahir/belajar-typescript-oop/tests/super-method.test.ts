describe('Method Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.info(`and I'm a manager`);
        }
    }

    it('should support method overriding', () => {
        const employee = new Employee('John');
        employee.sayHello('Gary');

        const manager = new Manager('Yan');
        manager.sayHello('Sander');
    });
});