"use strict";
let id = 5;
let someone = "John Doe";
let isTrue = true;
let x = "any value";
let ids = [1, 2, 3, 4, 5];
let names = ["john", "mark"];
let anyArray = [1, true, "john"];
let person = [1, "brad", true];
let employee;
employee = [
    [1, "mark"],
    [2, "jack"],
    [3, "jill"],
];
let uid = 22;
uid = "twxj45a";
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
let user;
user = {
    id: 1,
    name: "John",
};
const john = {
    id: 5,
    name: "John",
};
const mark = {
    id: 4,
    name: "Mark",
};
let userId;
let customerId = userId;
let cusId = userId;
customerId = 5545;
cusId = 5454;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 1));
function log(message) {
    console.log(message);
}
console.log("hello world");
const jimmy = {
    id: 782,
    name: "Jim Golding",
    hasAccess: false,
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const brad = new Person(1, "Brad Jones");
const mike = new Person(2, "Mike Mayor");
console.log(brad, mike);
console.log(brad.register());
class Viewer {
    constructor(id, name) {
        this.viewerId = id;
        this.viewerName = name;
    }
    show() {
        return `Viewer details : ID: ${this.viewerId}, NAME: ${this.viewerName}`;
    }
}
const markova = new Viewer(54545, "John Markova");
console.log(markova.show());
class Subscribers extends Viewer {
    constructor(viewerId, viewerName, position) {
        super(viewerId, viewerName);
        this.position = position;
    }
}
const subc = new Subscribers(5498, "Shawn Michael", "Backend Dev");
console.log(subc.show());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["a", "b", "c", "d"]);
