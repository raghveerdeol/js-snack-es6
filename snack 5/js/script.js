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

let sectionEl = document.querySelector("section");

const articoliPosition = articoliModa.map((articolo) => {
    let articleEl = document.createElement("article");
    let nameEl = document.createElement("div");
    let typeEl = document.createElement("div");
    let colorEl = document.createElement("div");
    let positionEl = document.createElement("div");
    sectionEl.appendChild(articleEl);
    articolo.position = getRandomCharacters(); 
    let {name, type, color, position} = articolo;
    articleEl.appendChild(nameEl);
    articleEl.appendChild(typeEl);
    articleEl.appendChild(colorEl);
    articleEl.appendChild(positionEl);
    nameEl.append(name);
    typeEl.append(type);
    colorEl.append(color);
    positionEl.append(position);
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