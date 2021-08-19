// * Basic types
let id: number = 5;
let someone: string = "John Doe";
let isTrue: boolean = true;
let x: any = "any value";

// * Array types
let ids: number[] = [1, 2, 3, 4, 5]; //array of numbers
let names: string[] = ["john", "mark"]; //array of strings
let anyArray: any[] = [1, true, "john"]; // array of any types

// * Tuple
// array of particular data types in particular order
let person: [number, string, boolean] = [1, "brad", true];

// * Array of Tuples
let employee: [number, string][];
employee = [
    [1, "mark"],
    [2, "jack"],
    [3, "jill"],
];

// * Unions
// specifying multiple data types a variable can hold
let uid: string | number = 22;
uid = "twxj45a";

// * Enum (Enumerated Types)
// Set of named constants
enum Direction1 {
    // by default first one has value 0, but can be changed
    // to any number or other data of different types
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
console.log(Direction1.Up);
console.log(Direction1.Down);

// * Objects
let user: { id: number; name: string };
user = {
    id: 1,
    name: "John",
};
// above code is messy, there is another way :
type User = {
    id: number;
    name: string;
};

const john: User = {
    id: 5,
    name: "John",
};

const mark: User = {
    id: 4,
    name: "Mark",
};

// * Type Assertions
// telling compiler to treat an entity as different type
let userId: any;

// WAY 1:
let customerId = <number>userId; // asserting number type
// WAY 2:
let cusId = userId as number; // asserting number type

customerId = 5545;
cusId = 5454;

// * Functions
// function name(arg1:type,arg2:type):return_type {definition}
function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(2, 1));

// 'void' return type for function that do not return anything
function log(message: string | number): void {
    console.log(message);
}
console.log("hello world");

// * Interfaces
interface Employee {
    readonly id: number; // read-only access
    name: string;
    hasAccess: boolean;
    family?: number; //optional
}

const jimmy: Employee = {
    id: 782,
    name: "Jim Golding",
    hasAccess: false,
};

// * Interfaces with functions
interface MathInterface {
    (x: number, y: number): number;
}
// functions with MathInterface
const add: MathInterface = (x: number, y: number): number => x + y;
const sub: MathInterface = (x: number, y: number): number => x - y;

// * Classes
class Person {
    // ? Access Modifiers
    //  these properties of classes (id,name) are public by default
    // they can be changed to -> private or protected
    private id: number; // private properties can be accessed only in class
    protected name: string; // private properties can be accessed in the class and extended class

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // methods
    register() {
        return `${this.name} is now registered!`;
    }
}
const brad = new Person(1, "Brad Jones");
const mike = new Person(2, "Mike Mayor");
console.log(brad, mike);
console.log(brad.register());

// ? Interface with classes
interface ViewerInterface {
    viewerId: number;
    viewerName: string;
    show(): string;
}

class Viewer implements ViewerInterface {
    viewerId: number;
    viewerName: string;

    constructor(id: number, name: string) {
        this.viewerId = id;
        this.viewerName = name;
    }

    show() {
        return `Viewer details : ID: ${this.viewerId}, NAME: ${this.viewerName}`;
    }
}

const markova = new Viewer(54545, "John Markova");
console.log(markova.show());

// ? Extending Classes
class Subscribers extends Viewer {
    position: string;

    constructor(viewerId: number, viewerName: string, position: string) {
        // extending from parent class 'Viewer'
        super(viewerId, viewerName);
        this.position = position;
    }
}

const subc = new Subscribers(5498, "Shawn Michael", "Backend Dev");
console.log(subc.show());

// * Generics
// acts as placeholder for a type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["a", "b", "c", "d"]);
