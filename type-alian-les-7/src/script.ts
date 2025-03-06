// const userDetails = (id: string | number, user: { name: string, age: number }) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }

// const sayHello = (user: { name: string, age: number }) => {
//     console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`)
// }

type stringOrNum = string | number;
type userType = { name: string, age: number }

const userDetails = (id: stringOrNum, user: userType) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`)
}