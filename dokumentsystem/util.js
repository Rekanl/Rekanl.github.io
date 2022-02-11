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


