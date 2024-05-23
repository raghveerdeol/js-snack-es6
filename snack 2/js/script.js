// SNACK 2
// <!-- Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame... -->
// -creiamo un array studenti con oggetti letterali contente tutti i dati degli studenti;
// <!-- 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE); -->
// -creo un array contente solo i nomi degli studenti attraverso map appllicato al array studenti  e ci applicco uppercase; 
// <!-- 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 -->
// -creo un array e ci applico filter  con condizione if grades > 78 return true;
// <!-- 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 -->
// -creo un array e ci applico filter con condizione if grades > 70 && id > 120 return true;
// Buon pomeriggio e buon lavoro !!! :faccia_nerd:

let studenti = [
    {
        id:   213,
        name:  "Giuseppina della Rovere", 
        grades:  78,  
    },
    {
        id:  110,
        name:   "Paola Cortellessa", 
        grades:  96,  
    },
    {
        id:   250,
        name:   "Andrea Mantegna", 
        grades:  48,  
    },
    {
        id:   145,
        name:   "Gaia Borromini", 
        grades:  74,  
    },
    {
        id:   196,
        name:   "Luigi Grimaldello", 
        grades:  68,  
    },
    {
        id:   102,
        name:   "Piero della Francesca", 
        grades:  50,  
    },
    {
        id:   120,
        name:   "Francesca da Polenta", 
        grades:  84,  
    },
];
console.log(studenti)

const nomiStudenti = studenti.map((element) => {
        return (element.name).toUpperCase()
});
console.log(nomiStudenti)