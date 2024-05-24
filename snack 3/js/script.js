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
const [
    bici1,
    bici2,
    bici3,
    bici4,
    bici5,
    bici6,
] = bici;
console.log(bici3);


for (const key in bici) {
    
    };

bici.forEach((bike, index) => {
    // console.log(bike.peso);
    const [peso] = bici;
    console.log(peso)
})