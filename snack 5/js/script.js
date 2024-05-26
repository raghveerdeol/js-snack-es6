let articoliModa = [
    {
        name:  "Poppy",
        type:  "tshirt",
        color:  "red",
    },    {
        name:  "Jumping",
        type:  "occhiali",
        color:  "blue",
    },    {
        name:  "CrissCross",
        type:  "scarpe",
        color:  "black",
    },    {
        name:  "Jenny",
        type:  "borsa",
        color:  "pink",
    },
];


const articoliPosition = articoliModa.map((articolo) => {
    articolo.position = getRandomCharacters();
    return articolo;
});
console.log(articoliPosition);

function getRandomCharacters() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        result = characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
};
let x = getRandomCharacters();
console.log(x);