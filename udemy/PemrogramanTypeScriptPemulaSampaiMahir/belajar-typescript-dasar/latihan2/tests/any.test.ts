describe('Any', () => {
    it('should support in typescript', () => {
        const person: any = {
            id: 1,
            name: 'Gary',
            age: 20
        };

        person.age = 31;
        person.address = 'Jakarta';

        console.info(person)
    });
});