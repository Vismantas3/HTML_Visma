let objektu_masyvas = [
    {
        'vardas': 'Jonis',
        'pavarde': 'Bekojis',
        'mokykla': 'KTU',
        'kursas': 4,
        'pazymiai': [7, 4, 5]
    },
    {
        'vardas': 'Saulius',
        'pavarde': 'Saulenas',
        'mokykla': 'VGTU',
        'kursas': 2,
        'pazymiai': [8, 6, 9]
    },
    {
        'vardas': 'Jonas',
        'pavarde': 'Jonaitis',
        'mokykla': 'VU',
        'kursas': 3,
        'pazymiai': [9, 8, 7]
    },
    {
        'vardas': 'Laura',
        'pavarde': 'Lauraitė',
        'mokykla': 'KTU',
        'kursas': 1,
        'pazymiai': [6, 7, 6]
    },
    {
        'vardas': 'Tomas',
        'pavarde': 'Tomkus',
        'mokykla': 'VGTU',
        'kursas': 3,
        'pazymiai': [8, 9, 9]
    }
];

console.log(objektu_masyvas[4]);

let penktas_objektas = objektu_masyvas[4];
let sakinys = penktas_objektas.vardas + ' ' + penktas_objektas.pavarde + ' mokosi ' +
    penktas_objektas.mokykla + ', ' + penktas_objektas.kursas + ' kurse, pažymiai: ' +
    penktas_objektas.pazymiai + '.';
console.log(sakinys);


function isvesti_studento_pazymius(studentas) {
  console.log("Studento \"" + studentas.vardas + " " + studentas.pavarde + "\" pažymiai: " + studentas.pazymiai)
}

for (let i = 0; i < objektu_masyvas.length; i++) {
  let studentas = objektu_masyvas[i];
  isvesti_studento_pazymius(studentas);
}


function skaiciuoti_pazymiu_suma(pazymiai) {
  let suma = 0;
  for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
  }
  return suma;
}

let pazymiu_suma = skaiciuoti_pazymiu_suma(objektu_masyvas[4].pazymiai);
console.log("Pasirinktų pažymių suma: " + pazymiu_suma);


function skaiciuoti_pazymiu_sandauga(pazymiai) {
  let sandauga = 1;
  for (let i = 0; i < pazymiai.length; i++) {
    sandauga *= pazymiai[i];
  }
  return sandauga;
}

let pazymiu_sandauga = skaiciuoti_pazymiu_sandauga(objektu_masyvas[4].pazymiai);
console.log("Pasirinktų pažymių sandauga: " + pazymiu_sandauga);


function patikrinti_numeriskuma(kursas) {
  return typeof kursas === 'number';
}

let numeriskas = patikrinti_numeriskuma(objektu_masyvas[4].kursas);
console.log("Kursas yra numeral tipo: " + numeriskas);


function patikrinti_kurso_numeri(studentas) {
  return studentas.kursas === 4 && typeof studentas.kursas === 'number';
}


let ketvirtas_kursas = patikrinti_kurso_numeri(objektu_masyvas[4]);
console.log("Studentas mokosi ketvirtame kurse ir reikšmė yra numeral: " + ketvirtas_kursas);