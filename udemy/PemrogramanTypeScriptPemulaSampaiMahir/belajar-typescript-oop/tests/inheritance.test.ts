describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
    }

    class Director extends Manager {
    }

    it('should support inheritance', () => {
        const employee = new Employee('Yan')
        console.info(employee.name);

        const manager = new Manager('Gary')
        console.info(employee.name);

        const director = new Director('Sander')
        console.info(employee.name);
    });
});