const squadreCalcio = [
    {
        nome:  "milan",
        "puntiFatti":  0,
        "falliSubiti":  0,
    },
    {
        nome:  "roma",
        "puntiFatti":  0,
        "falliSubiti":  0,
    },
    {
        nome:  "lazio",
        "puntiFatti":  0,
        "falliSubiti":  0,
    },
    {
        nome:  "napoli",
        "puntiFatti":  0,
        "falliSubiti":  0,
    },
    {
        nome:  "inter",
        "puntiFatti":  0,
        "falliSubiti":  0,
    },
];
console.log(squadreCalcio);

const squadrePunti = squadreCalcio.map((squadra) => {
    let {nome, puntiFatti, falliSubiti} = squadra;
    puntiFatti = getRandomNumber();
    falliSubiti = getRandomNumber();
    return {nome, puntiFatti, falliSubiti};
});
console.log(squadrePunti);

const squadreFallli = squadrePunti.map((squadra) => {
    let {nome, falliSubiti} = squadra
    return {nome, falliSubiti};
});
console.log(squadreFallli);


function getRandomNumber() {
    let x = Math.floor(Math.random() * 100);
    return x;
};