// const forex_coach = {
//     name: "Ukombe",
//     role: "Mentor",
//     age: 27
// }

// function printName( person: {name: string; role: string} ): void {
//     console.log(`${person.name} ${person.name}`)
// };

// printName({name: "kind",  role: "student"});

///// Excess == only print name & role

// printName(forex_coach)


// let coordinate: {x: number; y: number} = {x:34, y:2};

// function randomCoordinate(): {x: number, y: number} {
//     return { x: Math.random(), y: Math.random()};
// }


///// Type alias

// type Point = {
//     x: number;
//     y: number;
// }


// let coordinate: Point = {x:34, y:2};

// function randomCoordinate(): Point {
//     return { x: Math.random(), y: Math.random()};
// }


// function doublePoint(point: Point ): {x: number; y: number} {
//     return {x: point.x * 2, y: point.y * 2};
// }


/// Nested Objects

// type Song = {
//     title: string,
//     artist: string,
//     numStreams: number,
//     credits: {
//         producer: string,
//         writer: string
//     }
// }

// function calculatePayout( song: Song ): number {
//    return song.numStreams * 0.0033
// }

// function printSong(song: Song) {
//     console.log(`${song.title} - ${song.artist}`);
// }

// const mySong: Song = {
//     title: "Adaobi",
//     artist: "Mavins Crew",
//     numStreams: 2000000,
//     credits: {
//         producer: "Don Jazzy",
//         writer: "Rema"
//     }
// }

// calculatePayout(mySong);
// printSong(mySong);


/// OPTIONAL PROPERTIES

// type Point = {
//     x: number;
//     y: number;
//     z?: number;
// }


// const myPoint: Point = {x: 1, y: 3}


// readonly Modifier

// type User = {
//     readonly id: number
//     username: string;
// };

// const user: User = {
//     id: 12837,
//     username: "catgurl"
// }

// console.log(user.id)
//  xx user.id = 123



//// Intersection Types

// type Circle = {
//     radius: number;
// };

// type Colorful = {
//     color: string;
// }

// type ColorfulCircle = Circle & Colorful;

// const happyFace: ColorfulCircle = {
//     radius: 4,
//     color: "yellow",
// };


// type Cat = {
//     numLives: number
// }

// type Dog = {
//     breed: String
// }

// type CatDog = Cat & Dog & {
//     age: number
// };

// const christy : CatDog = {
//     numLives: 7,
//     breed: "Husky",
//     age: 9
// }