const bici = [
    {
        nome: " jojo",
        peso:  20,
    },
    {
        nome: " jotaro",
        peso:  10,
    },
    {
        nome: "gino",
        peso:  5,
    },
    {
        nome: "anco",
        peso:  25,
    },
    {
        nome: "giulio",
        peso:  30,
    },
    {
        nome: "cesare",
        peso:  70,
    },
];
/* SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal --> */
let biciclette = [];
bici.forEach((bike) => {
    // console.log(bike.peso);
    const {peso} = bike;
    console.log(peso);
    biciclette.push(peso);
});
const biciLeggera = minore(biciclette);
console.log(biciclette);
console.log(biciLeggera)

function minore(dato) {
    let x = dato[0];
    for (let index = 0; index < dato.length; index++) {
        if (x > dato[index]) {
            x = dato[index];
        } else {
            x = x;
        }
    }
    return x;
}