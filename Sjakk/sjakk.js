// @ts-check
import { updateMyProperties, thingsWithId, preCalc } from "../lib/Minos.js";
const web = updateMyProperties ();

const nyttElement = tag => document.createElement (tag);

const  { brett } = thingsWithId

for (let i=0, i<64; i += 1) {
    const rute= nyttElement ("div");
    brett.append (rute);

}