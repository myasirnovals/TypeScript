import {z} from "zod";

describe('zod', () => {
    it('should support validation', () => {
        const schema = z.string().min(3).max(100);

        const request = 'yan';
        const result = schema.parse(request);

        expect(result).toBe('yan');
    });
});