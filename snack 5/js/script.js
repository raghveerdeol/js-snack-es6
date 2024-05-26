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
function getRandomCharacters() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        result = characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
};
let x = getRandom();
console.log(x);