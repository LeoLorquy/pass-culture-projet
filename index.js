let foisJ = 0;
let counter = 0;
let countersemaine = 0;
let countermois = 0;
let calculass1;
const unmois = () => {
    countermois ++;
    foisJ += 14;
    calculass1 = foisJ * 0.01 * 30;
    document.getElementById('mois').innerHTML = "mois" + " " + calculass1 + "€";
    document.getElementById('buttonmois').innerHTML = countermois - 1 + " " + "mois";
    return;
}

let number;
let prix;
let base = 0;
let calcul = 0;
let calcul2 = 0;
let result = 0;
let countervente = 0;
const test = () => {
    base += 20;
    number = 0;
    prix = 6.85;
    calcul = 20%prix;
    calcul2 += 20 - calcul;
    result += 20 - calcul2;
    document.getElementById('test').innerHTML = "-" + calcul2 + "€";
    // je peut en vendre que 2... (6.85 * 2 = 13.7 et 13.7 c la valeur que renvoie le calcul 2)
    document.getElementById('base').innerHTML = base + "€" + "," + " " + "livre = 6.85€";
    if(prix * 2 == 13.7){
        countervente += 2;
        document.getElementById('testvente').innerHTML = countervente;
    }
    document.getElementById('gain').innerHTML = 15*countervente + "€";
    return;
}

unmois();

const global = () => {

}

// mangas a 6.85



// let MoisGlobal;
 
// function Calendrier(){
//     MoisGlobal = "Aout";
// }
// Calendrier()
// console.log(MoisGlobal)