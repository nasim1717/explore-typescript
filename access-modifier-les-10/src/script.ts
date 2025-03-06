// class player {
//     private name: string;
//     public age: number;
//     readonly country: string;

//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     play() {
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }

// const mashrafi = new player("Mashrafi", 40, "Bangaldesh");
// const sakib = new player("Mashrafi", 40, "Bangaldesh");

// const players: player[] = [];
// players.push(sakib);
// players.push(mashrafi)


class player {

    constructor(private name: string, public age: number, readonly country: string) {

    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

const mashrafi = new player("Mashrafi", 40, "Bangaldesh");
const sakib = new player("Mashrafi", 40, "Bangaldesh");

const players: player[] = [];
players.push(sakib);
players.push(mashrafi)