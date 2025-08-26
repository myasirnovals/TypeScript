"use strict";
describe('Array', function () {
    it('should same with javascript', () => {
        const names = ["Muhamad", "Yasir", "Noval"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', () => {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main Game";
    });
    it('should support tuple', () => {
        const person = ["Yasir", "Noval", 19];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
