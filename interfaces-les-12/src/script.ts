import { player } from './classes/Player.js'
import { IsPlayer } from './interfaces/isPlayer.js';

const mashrafi = new player("Mashrafi", 40, "Bangaldesh");
// const sakib = new player("Mashrafi", 40, "Bangaldesh");

let sakib: IsPlayer;

sakib = new player("Mashrafi", 40, "Bangaldesh");

const players: IsPlayer[] = [];
players.push(sakib);
players.push(mashrafi)


// -----------------

// interface ReactngleOptions {
//     width: number;
//     length: number;
// }

// function drawRectangle(options: { width: number; length: number }) {
//     let width = options.width;
//     let length = options.length;
// }

// let threeDdoptions = {
//     width: 30,
//     length: 20,
//     height: 10,
// }

// drawRectangle(threeDdoptions); // kono error debe na
// // drawRectangle({
// //     width: 30,
// //     length: 20,
// //     height: 10,
// // });

// drawRectangle({ width: 30, length: 20 })