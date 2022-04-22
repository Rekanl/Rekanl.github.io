// @ts-check

import { updateMyProperties, thingsWithId, create } from "../lib/Minos.js";

const web = updateMyProperties();
/** web vil ha en web.xx og web.zz   gitt: <div>{xx} <input name="zz"> {zz} </div>
 * disse vil automatisk oppdateres, web.xx = 1 => {xx} erstattes med 1
 * endring av input oppdaterer web.zz og {zz} (og omvendt)
 */

const { editor, tegning } = thingsWithId();

editor.value = "hei";

editor.onkeydown = event => {
    const k = event.key;
    if (k === "Enter") {
        tegning.innerHTML = "";
        const text = editor.value;
        const linjer = text.split('\n');
        for (const linje of linjer) {

            if (linje.startsWith("fugl")) {
                // tegn en fuggel
                tegnEnFuggel();
            }

            if (linje.startsWith("katt")) {
                tegnEnKatt();
            }

            if (linje.startsWith("hund")) {
                tegnEnHund();
            }

            if (linje.startsWith("hus")) {
                tegnEnHus();
            }

            if (linje.startsWith("mann")) {
                tegnEnMann();
            }
            if (linje.startsWith("kvinne")) {
                tegnEnKvinne();
            }
            if (linje.startsWith("gutt")) {
                tegnEnGutt();
            }
            if (linje.startsWith("jente")) {
                tegnEnJente();
            }
            

        }
    }
}

function tegnEnFuggel() {
    const div = create("div");
    div.className = "fugl";
    tegning.append(div);
}

function tegnEnKatt() {
    const div = create("div");
    div.className = "katt";
    tegning.append(div);
} 

function tegnEnHund() {
    const div = create("div");
    div.className = "hund";
    tegning.append(div);
} 

function tegnEnHus() {
    const div = create("div");
    div.className = "hus";
    tegning.append(div);
} 

function tegnEnMann() {
    const div = create("div");
    div.className = "mann";
    tegning.append(div);
} 

function tegnEnKvinne() {
    const div = create("div");
    div.className = "kvinne";
    tegning.append(div);
} 

function tegnEnGutt() {
    const div = create("div");
    div.className = "gutt";
    tegning.append(div);
} 

function tegnEnJente() {
    const div = create("div");
    div.className = "jente";
    tegning.append(div);
} 