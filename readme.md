SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
<!-- Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'] -->
- creiamo un array  Tavolo Vip con i nomi degli invitati;

<!-- Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto. -->
-usiamo il ciclo for each sul array Tavolo vip per assegnare a ogni ospite: -nome tavolo - nome ospite e posto occupato;
- per il posto usiamo l'indice del array Tavolo Vip 




SNACK 2
<!-- Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame... -->
-creiamo un array studenti con oggetti letterali contente tutti i dati degli studenti;
<!-- 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE); -->
-creo un array contente solo i nomi degli studenti attraverso map appllicato al array studenti  e ci applicco uppercase; 
<!-- 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 -->
-creo un array e ci applico filter  con condizione if grades > 78 return true;
<!-- 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 -->
-creo un array e ci applico filter con condizione if grades > 70 && id > 120 return true;
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

<!-- 
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal -->
- creo un array di oggetti chiamata bici con proprietà nome e peso;




<!-- 
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. -->
- creo array oggetto squadreCalcio = [
    {
        nome:  ,
        "punti fatti":  ,
        "falli subiti":  ,
    }
]
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




BONUS 1: SNACK 5
Abbiamo questa lista di articoli di moda:
name        type      color
Poppy       tshirt    red
Jumping     occhiali  blue
CrissCross  scarpe    black
Jenny       borsa     pink
Questi articoli sono inseriti in un array di oggetti.
Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.
BONUS 2
Stampare in pagina oltre che in console!