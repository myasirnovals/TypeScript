import {expect} from "@jest/globals";

describe('Generic', () => {
    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value
        }

        get(): T {
            return this.value;
        }

        set(value: T) {
            this.value = value;
        }
    }

    it('should support multiple data type', () => {
        const dataNumber = new GenericData<number>(123);
        dataNumber.value = 2.0

        expect(dataNumber.value).toBe(2.0);

        const dataString = new GenericData<string>('yan');
        const upper = dataString.value.toUpperCase();

        expect(upper).toBe("YAN");
    });

    function create<T>(value: T): T {
        return value;
    }

    it('should support function generic', () => {
        const result1: string = create<string>('Yan');
        expect(result1).toBe("Yan");

        const result2: number = create<number>(123);
        expect(result2).toBe(123);
    });

    class Entry<K, V> {
        constructor(public key: K, public value: V) {
        }
    }

    class Triple<K, V, T> {
        constructor(public key: K, public value: V, public message: T) {
        }
    }

    it('should support multiple generic type', () => {
        const entry = new Entry<number, string>(1, 'Gary Sanderson');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Gary Sanderson');

        const triple = new Triple<number, string, string>(1, 'Error', "Can't divide by zero");
        expect(triple.key).toBe(1);
        expect(triple.value).toBe('Error');
        expect(triple.message).toBe("Can't divide by zero");
    });
});