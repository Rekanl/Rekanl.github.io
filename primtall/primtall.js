// @ts-check
import { updateMyProperties, thingsWithId } from "../lib/Minos.js";

const web = updateMyProperties();


const { vis, algoritme,} = thingsWithId();

const primtall = (n) => {
    if (n % 2 == 0 ) return false;
    for (let i=3; i <= Math.sqrt(n); i++) {
        if (n % i == 0 ) return false;
    }    
    return true;
}

vis.onclick = () => {
    if (Number(web.n) > 1 ) {
        algoritme.style.opacity = "1";
        const n = Number (web.n);
        const erPrimtall = primtall(n);
        if(erPrimtall == true) {
web.muligens = "er";
        }else{
web.muligens = "er ikke"
        }

    }   
}
