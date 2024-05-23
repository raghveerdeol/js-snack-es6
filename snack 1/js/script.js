// SNACK 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// <!-- Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'] -->
// - creiamo un array  Tavolo Vip con i nomi degli invitati;
const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

// <!-- Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
// nome del tavolo (tableName),
// nome dell'ospite (guestName),
// posto occupato (place),
// Generiamo e stampiamo in console la lista per i segnaposto. -->
// -usiamo il ciclo for each sul array Tavolo vip per assegnare a ogni ospite: -nome tavolo - nome ospite e posto occupato;
// - per il posto usiamo l'indice del array Tavolo Vip 

/* for (let index = 0; index < tavoloVip.length; index++) {
    tavoloVip[index] = {
        tableName: "Tavolo vip",
        guestName: tavoloVip[index],
        place: index
    }
} */

// let lista =  [];

// tavoloVip.forEach((element, index) => {
//     element = {
//         tableName: "Tavolo vip",
//         guestName: element,
//         place: index
//     }
//     lista.push(element)
// });

let lista = tavoloVip.map((element, index) => {
    return element = {
        tableName: "Tavolo vip",
        guestName: element,
        place: index
    }
} )
console.log(lista)