function finnPDF(a){
    let liste = a.split(" ");
    let nyListe = [];

    for (let i=0; i<liste.length; i+=1) {
    const fil = liste[i];
    if(fil.endsWith("")){
        nyListe.push(fil);
    }
    }

    return nyListe.join(" ") 
}

console.log(finnPDF("doc1.pdf doc2.docx forklaring.txt eksempel.pdf"));