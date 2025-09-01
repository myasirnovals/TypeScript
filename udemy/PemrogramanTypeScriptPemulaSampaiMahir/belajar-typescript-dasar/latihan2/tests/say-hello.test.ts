import {sayHello} from "../src/say-hello";

describe('sayHello Function', () => {
    it('should return Hello Yan', () => {
        expect(sayHello('Yan')).toBe('Hello Yan');
    });
});