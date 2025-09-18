describe('Array', () => {
    it('should same with javascript', () => {
        const names: string[] = ['Gary', 'Sanderson'];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string> = ['Gaming', 'Reading'];
        console.info(hobbies);

        hobbies[0] = 'Main Game';
    });

    it('should support tuple', () => {
        const person: readonly [string, string, number] = ['Gary', 'Sanderson', 100000];
        console.info(person);
    });
});