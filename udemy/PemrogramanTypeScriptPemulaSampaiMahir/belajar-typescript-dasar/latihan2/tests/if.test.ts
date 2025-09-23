describe('If Statement', () => {
    it('should support in typescript', () => {
        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it('should support ternary operator', () => {
        const value = 80;
        const say = value >= 75 ? 'Congratulation' : 'Try Again';
        console.info(say);
    });

    it('should support switch statement', () => {
        function sayHello(name: string): string {
            switch (name) {
                case 'Gary':
                    return 'Hello Gary';
                case 'Sanderson':
                    return 'Hello Sanderson';
                default:
                    return 'Hello';
            }
        }

        console.info(sayHello('Gary'));
        console.info(sayHello('Sanderson'));
        console.info(sayHello('Yan'));
    });
});