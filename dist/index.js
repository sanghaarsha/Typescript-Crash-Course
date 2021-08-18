"use strict";
var id = 5;
var someone = "John Doe";
var isTrue = true;
var x = "any value";
var ids = [1, 2, 3, 4, 5];
var names = ["john", "mark"];
var anyArray = [1, true, "john"];
var person = [1, "brad", true];
var employee;
employee = [
    [1, "mark"],
    [2, "jack"],
    [3, "jill"],
];
var uid = 22;
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
var user;
user = {
    id: 1,
    name: "John",
};
var john = {
    id: 5,
    name: "John",
};
var mark = {
    id: 4,
    name: "Mark",
};
var userId;
var customerId = userId;
var cusId = userId;
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
var jimmy = {
    id: 782,
    name: "Jim Golding",
    hasAccess: false,
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var brad = new Person(1, "brad");
var mike = new Person(2, "mike");
console.log(brad, mike);
