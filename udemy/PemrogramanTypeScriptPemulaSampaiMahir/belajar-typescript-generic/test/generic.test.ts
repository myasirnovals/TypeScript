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

    it('should support optional generic type', () => {
        const entry = new Entry(1, 'Hello');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hello');
    });

    class SimpleGeneric<T = string> {
        private value?: T;

        setValue(value: T) {
            this.value = value;
        }

        getValue(): T {
            return this.value!;
        }
    }

    it('should create simple generic', () => {
        const simpleGeneric = new SimpleGeneric();
        // simpleGeneric.setValue(123);
        simpleGeneric.setValue("Yan");
        // simpleGeneric.setValue(true);

        expect(simpleGeneric.getValue()!.toUpperCase()).toBe("YAN");
    });

    interface Employee {
        id: string;
        name: string;
    }

    interface Manager extends Employee {
        totalEmployees: number;
    }

    interface VicePresident extends Manager {
        totalManagers: number;
    }

    class EmployeeData<T extends Employee> {
        constructor(public employee: T) {
        }
    }

    it('should support constraint', () => {
        const data1 = new EmployeeData<Employee>({
            id: "1",
            name: "Yan"
        });

        const data2 = new EmployeeData<Manager>({
            id: "1",
            name: "Yan",
            totalEmployees: 100
        });

        const data3 = new EmployeeData<VicePresident>({
            id: "1",
            name: "Yan",
            totalEmployees: 100,
            totalManagers: 100
        });
    });

    it('should support array', () => {
        const array = new Array<string>();
        array.push("Yan");
        array.push("Gary");
        array.push("John");

        expect(array.length).toBe(3);
        expect(array[0]).toBe("Yan");
    });

    it('should support set', () => {
        const set = new Set<string>();
        set.add("Yan");
        set.add("Gary");
        set.add("John");
        set.add("Yan");
        set.add("Gary");
        set.add("John");

        expect(set.size).toBe(3);
        expect(set.has("Yan")).toBe(true);
    });

    it('should support map', () => {
        const map = new Map<string, number>();
        map.set("Yan", 100);
        map.set("Gary", 200);
        map.set("John", 300);

        expect(map.get("Yan")).toBe(100);
    });

    async function fetcData(value: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (value === "Yan") {
                    resolve("Yan");
                } else {
                    reject("Not Found");
                }
            }, 1000);
        });
    }

    it('should support promise', async () => {
        const result = await fetcData("Yan");
        expect(result).toBe("Yan");

        try {
            await fetcData("Gary");
        } catch (e) {
            expect(e).toBe("Not Found");
        }
    });
});