"use strict";
describe('Object', () => {
    it('should support in typescript', () => {
        const person = {
            id: "1",
            name: "Yasir"
        };
        person.id = "2";
        person.name = "Noval";
        console.info(person);
    });
});
