describe('Object', () => {
    it('should support in typescript', () => {
        const person: {id: string, name: string} = {
            id: '1',
            name: 'Gary'
        };

        console.info(person);
    });
});