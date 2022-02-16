// @ts-check

export function velgFiler(filer,type) {
    const ret = [];
    const liste = filer.split(" ");
    for (let i=0;i< liste.length; i++) {
        const fil = liste[i];
        if (fil.endsWith(type)) {
            ret.push(fil);
        }
    }
    return ret.join(" ");
}

export function linjerMedOrd(text,ord){

    const liste = text.split("\n");
    const ret = [];
    for (let i=0;i< liste.length; i++) {
        const linje = liste[i];
        if (linje.includes(ord)) {
            ret.push(linje);
        }

    }
    return ret.length;
}

let start= 0
for(let i=0; i<a.length; i++){
  if(a[i] > 0.00001){
    start = i; 
    break;
  }
}
return a.slice(start, a.length)  

var i=0
for (i=a.length; i>0; i-=1){
if(a[i]>0.0001){
break
}
}
return a.slice(0,i+1) 

