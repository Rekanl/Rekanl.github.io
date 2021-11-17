// @ts-check
import { updateMyProperties, thingsWithId } from "../lib/Minos.js";

const web = updateMyProperties ();

const {t1, t2, vis, algoritme, rutenett } = thingsWithId();

vis.onclick = () => {
    algoritme.style.opacity = "1";
    for(let i=0; i<12 ;i++) {
        const rute = document.createElement("div");
        rute.className = "rute";
        rutenett.append(rute);
    }
}