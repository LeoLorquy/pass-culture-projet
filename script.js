let counterVente = 0;
const passCulture = (livreAvendreBase) => {
    for(let i = 0 ; i < livreAvendreBase ; i += 6.85){
        counterVente ++;
        let calVentes = counterVente - 1;
        console.log('\x1b[37m', Math.round(calVentes) + " " + "ventes");
        console.log('\x1b[31m', Math.round(i) + "€" + " " + "< pertes");
        let calGains = calVentes * 15;
        console.log('\x1b[32m', calGains + "€" + " " + "> gains");
        console.log('\x1b[32m', Math.round(calGains - i) + "€" + " " + "=> benefice");
        console.log(" ")
    }
}
passCulture(10000000);


const passCulture2 = (livreAvendreBase2) => {
    let counterVenteForResult = livreAvendreBase2;
    let calculResult = counterVenteForResult * 15;
    console.log('\x1b[32m', livreAvendreBase2 + "ventes" + " " + "=" + " " + calculResult + "€")
    console.log(" ")
}
passCulture2(200);

// node custom color https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

















// let number;
// let prix;
// let base = 20;
// let calcul = 0;
// let calcul2 = 0;
// let result = 0;
// let countervente = 0;
// let gagner = 0;
// let base2;
// let reste = 0;
// let resteplusgain = 0;
// let plusgain = 0;
// for(let i = 0 ; i < 10 ; i++){
//     number = 0;
//     prix = 6.85;
//     calcul = 20 % prix;
//     calcul2 += 20 - calcul;
//     result += 20 - calcul2;
    
//     console.log("economie reinvestie" + " " + base + "€" + "," + " " + "livre = 6.85€");
//     // je peut en vendre que 2... (6.85 * 2 = 13.7 et 13.7 c la valeur que renvoie le calcul 2)
//     if(prix * 2 == 13.7){
//         countervente += 2;
//         console.log("ventes" + ":" + " " + countervente + " " + "livres");
//     }
//     console.log("perte" + ":" + " " + Math.round(calcul2) + "€");
//     reste = gagner - calcul2;
//     console.log("reste" + ":" + " " + Math.round(reste) + "€");
//     gagner = 15 * countervente;
//     console.log("gein" + ":" + " " + gagner + "€");
//     resteplusgain = gagner + reste;
//     console.log("gein + reste" + ":" + " " + gagner + "€" + " " + "+" + " " + Math.round(reste) + "€" + " " + "=" + " " + Math.round(resteplusgain) + "€");

//     console.log(" ")
//     base = gagner;
//     plusgain += Math.round(resteplusgain);
// }
// console.log("nb vente" + " " + countervente)
// console.log("gain" + ":" + " " + gagner + "€");
// let calculgein = gagner + plusgain;
// console.log("gain" + " " + "+" + " " + "reste" + " " + "=" + " " + calculgein + 14 + "€");
// console.log(" ")
// console.log(" ")
// console.log(" ")
// console.log(" ")