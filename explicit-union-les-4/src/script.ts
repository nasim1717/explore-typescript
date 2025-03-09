// ------------ explicit ----------

// let a: string;
// let b: number;
// a = "nasim";
// b = 34;
// let ar: string[] = [];
// ar.push("nasim");
// let arnum: string[] = [];
// ----------------------------

// ------------------ union ------
let b: string | number;
let a: (string | number)[] = [];

// --------------------------------

// let c: object;
// c = [1, 2, 3 ,4];
// c = {}
let c: {
    name: string,
    age: number,
    adult: boolean
}
c = {
    name: "nasim",
    age: 34,
    adult: true
}