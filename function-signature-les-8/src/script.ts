// let add: (x: number, y: number) => number;

// add = (a: number, b: number) => {
//     return a + b;
// }

// let myFunc: () => void;

let calcultaion: (x: number, y: number, z: string) => number;
calcultaion = (a: number, b: number, c: string) => {
    if (c === "add") {
        return a + b;
    } else {
        return a - b
    }
}

calcultaion(5, 6, "add")


let userDetails: (id: number | string, userInfo: {
    name: string,
    age: number,
}) => void | number;

userDetails = (id: number | string, userInfo: {
    name: string,
    age: number,
}) => {

}   