// importo express.js
const express = require('express');

// creo la variabile app per inizializzare express nel mio file
const app = express();

//  definisco il numero di porta in cui il server rimarrà in ascolto
const port = 3000;

// definisco la rotta base della mia app
app.get("/", (req, res) => {
    console.log("Server del mio blog")
});

// inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () =>{
    console.log(`Server del nostro ristorante in ascolto alla porta  ${port}`)
})