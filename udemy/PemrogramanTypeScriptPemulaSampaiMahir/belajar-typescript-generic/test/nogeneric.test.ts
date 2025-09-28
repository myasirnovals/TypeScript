describe('No Generic', () => {
    class Data {
        value: any;

        constructor(value: any) {
            this.value = value;
        }
    }

    it('should accept all values', () => {
        const data = new Data("Yan");
        data.value = 100;

        console.info(data.value.toUpperCase());
    });
});