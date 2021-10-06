//@ts-check


const rocket = {
    x:300,
    y:0,
    vx:0,
    vy:6,
    div:null,
}

let animation;
function flyttRakett(){
rocket.vy += 1;
rocket.y += rocket.vy;
rocket.x += rocket.vx;
rocket.div.style.transform=`translate(0${rocket.x}px,${rocket.y}px)`;
}

export function startSpillet(){
setInterval(flyttRakett,1000);
rocet.div = document.getElementById("falcon");
}