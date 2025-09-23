describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {
    }

    class VicePresident extends Manager {
    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello ${vp.name}, I'm a vice president`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello ${manager.name}, I'm a manager`);
        } else {
            console.info(`Hello ${employee.name}, I'm an employee`)
        }
    }

    it('should support polymorphism', () => {
        let employee = new Employee('Yan');
        console.info(employee.name);

        employee = new Manager('Yan');
        console.info(employee);

        employee = new VicePresident('Yan');
        console.info(employee);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Gary'));
        sayHello(new Manager('Sander'));
        sayHello(new VicePresident('Yan'));
    });
});