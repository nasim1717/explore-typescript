// const addId = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }

// const addId = <T extends object>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }

// ey vabeo dite pare, object ja khushi aste pare kintu name,age dite hobe must
// const addId = <T extends {name: string, age: number}>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }

const addId = <T extends {
    name: string,
    age: number,
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

// let user = addId({
//     name: "Mashrafi",
//     age: 40,
//     country: "Bangaldesh"
// });

let user = addId({
    name: "Mashrafi",
    age: 40,
    country: "Bangaldesh"
});

// interface APIResponse {
//     status: number;
//     type: string;
//     data: object;
// }

// const response1: APIResponse = {
//     status: 200,
//     type: "good",
//     data: {
//         name: "Mashrafi",
//         age: 40,
//         country: "Bangaldesh"

//     }
// }


interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: "good",
    data: "test"
}