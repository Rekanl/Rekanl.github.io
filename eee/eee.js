
const alleBrukere = {};

const leggMegTil = (id, navn, etternavn, alder, adresse, tlf) => {
    
    alleBrukere[id] = {
            navn: navn,
            etternavn: etternavn,
            alder: alder,  
            adresse: adresse,
            tlf: tlf,
        }
    }

leggMegTil("01", "Rekan", "Lutfi", 18, "Afghanistan", 6969696969);
leggMegTil("02", "Nathaniel", "Stensen", 20, "Rikmannsområdet", "penger");
leggMegTil("03", "Joe", "Jackson", 23, "Westside", 12345678910);

// Liste over alle idene som finnes i alleBrukere
// ["01", "02", "03"]
const AlleIds = Object.keys(alleBrukere);

// Tom liste som skal ha navn
const bareNavn = []

// array.push(obj)

// Går gjennom AlleIds 0..lengden av AlleIds
for(let i=0; i<AlleIds.length; ++i){
    // id er id nr i
    const id = AlleIds[i];
    // bruker nr id nr i
    const bruker = alleBrukere[id];
    bareNavn = navn
}

console.log(bareNavn);