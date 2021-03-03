class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }

    getName(): string {
        return this.name;
    }
}

const sam = new Person('Sam', 'david');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';