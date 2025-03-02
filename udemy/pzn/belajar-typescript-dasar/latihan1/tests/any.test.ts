describe('Any', () => {
    it('should support in typescript', () => {
        const person: any = {
            id: 1,
            name: "Muhamad Yasir Noval",
            age: 30
        };

        person.age = 19;
        person.address = "Indonesia";

        console.info(person)
    });
});