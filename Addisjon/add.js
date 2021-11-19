// @ts-check
import { updateMyProperties, thingsWithId } from "../lib/Minos.js";

const web = updateMyProperties();

web.pos = 0;


const { vis, algoritme, add } = thingsWithId();

vis.onclick = () => {

    algoritme.style.opacity = "1";
}

add.onclick = () => {
    web.siffer++;
}