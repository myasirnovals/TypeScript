import {sayHello} from "../src/say-hello";

describe('sayHello', () => {
    it('should return hello eko', () => {
        expect(sayHello('yan')).toBe('Hello yan');
    });
});