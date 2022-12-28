// 

// anonymous function
// const colors = ["red", "orange", "yellow"];
// colors.map(color => {
//     return color.toUpperCase()
// })

// void type
// function printTwice(msg: string): void {
//     console.log(msg);
//     console.log(msg);
// }


//never type
function makeError(msg: string): never {
    throw new Error(msg)
}

function gameLoop(): never {
    while (true) {
        console.log("GAME LOOP RUNNINNG")
    }
}