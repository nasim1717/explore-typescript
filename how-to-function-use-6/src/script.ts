
// ---------------
// let myFunc: Function;

// myFunc = () => {
//     console.log("hello");
// }
// -------------------

// const myFunc = (a: string, b: string, c: string = "nasim", d?: number) => {
//     console.log(`hello ${a} ${b}`);
// }

// myFunc("A", "B")

//return type set function
// const myFunc = (a: number, b: number, c: string = "nasim", d?: number) : number => {
//     console.log(`hello ${a} ${b}`);
//     return a + b;
// }

// myFunc(4, 5)

const myFunc = (a: string, b: string, c: string = "nasim") => {
    return a + b;
}

myFunc("A", "B")


