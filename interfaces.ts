// interface Point {
//     x: number;
//     y: number;
// }

// const pt: Point = {x: 123, y: 1234}

// interface Person {
//   readonly id: number;  
//   first: string;
//   last: string;
//   nickname?: string;
//   //sayHi: () => string;
//   sayHi(): string;
// }

// const thomas: Person = {sayHi: () => { return "Hello!"}, id: 22, first: 'Thomas', last: 'Hardy', nickname: 'Tom' };


// 

//////////////////////

interface Dog {
    name: string;
    age: number;
}


interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "woof"
    }
}


/// Extending Interface ///

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "bark"
    },
    job: "guide dog"
}

/////////// MULTIPLE INHERITANCE ////////

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 1234,
    email: "pierre@gmail.com",
    level: "Senior",
    languages: ["Js", "Python"]
}


/////////////// Type Vs Interfaces ////////