"use strict";
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Sam', 'david');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
