describe('Optional Parameter', () => {
    it('should support null and undefined', () => {
        function sayHello(name?: string | null) {
            if (name) {
                return `Hello ${name}`;
            } else {
                return 'Hello';
            }
        }

        sayHello('Gary');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});