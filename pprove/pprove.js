// @ts-check
import { updateMyProperties, thingsWithId } from "../lib/Minos.js";

const web = updateMyProperties();


for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {

        const prod  = [i * j];

         web.mult.push({prod});
    }
  }

