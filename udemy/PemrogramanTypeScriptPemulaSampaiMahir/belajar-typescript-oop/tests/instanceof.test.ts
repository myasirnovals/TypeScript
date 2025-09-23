describe('Instance Of', () => {
    class Employee {}
    class Manager {}

    const employee = new Employee();
    const manager = new Manager();

    it('should have problem using typeof', () => {
        console.info(typeof employee);
        console.info(typeof manager);
    });

    it('should support instanceof', () => {
        expect(employee instanceof Employee).toBe(true);
        expect(employee instanceof Manager).toBe(false);

        expect(manager instanceof Employee).toBe(false);
        expect(manager instanceof Manager).toBe(true);
    });
});