// // @ts-check

// export function velgFiler(filer,type) {
//     const ret = [];
//     const liste = filer.split(" ");
//     for (let i=0;i< liste.length; i++) {
//         const fil = liste[i];
//         if (fil.endsWith(type)) {
//             ret.push(fil);
//         }
//     }
//     return ret.join(" ");
// }

// export function linjerMedOrd(text,ord){

//     const liste = text.split("\n");
//     const ret = [];
//     for (let i=0;i< liste.length; i++) {
//         const linje = liste[i];
//         if (linje.includes(ord)) {
//             ret.push(linje);
//         }

//     }
//     return ret.length;
// }



// function matsj(a,b){
//     if(a.length!==b.length){
//         return false
//     }
//     var like = 0;
//     //forløkke
//     for(let i=0; i<a.length;i++){
//         if(a[i] === b[i]){
//             like++;
//         }
//     }
//     if(like === a.length) return true
//     return false
// }   

// console.log(matsj([1,2], [3,4]))



 function konflikt (a,b){
    const [u,v]=a;
    const[x,y]=b;
    if(y>x, yx) 
    return false;
}

// console.log(konflikt([100,200], [150,300]))
// console.log(konflikt([100,200], [300,400]))
// console.log(konflikt([100,200], [200,300]))
console.log(konflikt([100,200], [80,500]))