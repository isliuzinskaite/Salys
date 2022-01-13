"use strict";

alert("Labas");

// Portugalija
// valstybės plotas 92212 km2
// gyventoju skaicius 10 260 000

var šalys = [
    [{pavadinimas: "Portugalija", plotasKm2: 92212, gyventojai: 10260000}];
    [{pavadinimas: "Lietuva", plotasKm2: 65300, gyventojai: 2790000}];
    [{ pavadinimas: "Italija", plotasKm2: 301340, gyventojai: 59550000}];
    [{ pavadinimas: "Suomija", plotasKm2: 338440, gyventojai: 5531000}];
[{ pavadinimas: "Kanada", plotasKm2: 9985000, gyventojai: 38010000}]
]

var plotasGyventojui = (plotasKm2 * 1000000 / gyventojai);
// console.log(plotasGyventojui);
var gyventojaiMln = (gyventojai / 10000000);
// console.log(gyventojaiMln);

console.log(`Šalis: ${šalys[0].pavadinimas}, joje gyvena ${gyventojaiMln.toFixed(2)}mln. gyventojų`);
for(let i = 0; i < šalys.length; i++) {
    console.log(${šalys[i].pavadinimas})
}

console.log(`Valstybės plotas: ${plotasKm2}km2, plotas tenkantis vienam gyventojui: ${plotasGyventojui.toFixed(2)}m2.`);
for (let i = 0; i < šalys.length; i++) {
    console.log(${šalys[i].plotasKm2 })
}



document.write(`Šalis: ${pavadinimas}, joje gyvena ${gyventojaiMln.toFixed(2)}mln. gyventojų` );
console.log(`<br><br>Valstybės plotas: ${plotasKm2}km2, plotas tenkantis vienam gyventojui: ${plotasGyventojui.toFixed(2)}m2.`);


