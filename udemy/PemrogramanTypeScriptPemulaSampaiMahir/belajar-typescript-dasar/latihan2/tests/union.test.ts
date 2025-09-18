describe('Union Type', () => {
    it('should support in typescript', () => {
        let sample: number | string | boolean = 'Gary';
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it('should support typeof operator', () => {
        function process(value: number | string | boolean) {
            if (typeof value === 'number') {
                return value + 2;
            } else if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'boolean') {
                return !value;
            }
        }

        expect(process('Gary')).toBe('GARY');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});