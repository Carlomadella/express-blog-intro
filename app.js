// importo express.js
const express = require('express');

// creo la variabile app per inizializzare express nel mio file
const app = express();

//  definisco il numero di porta in cui il server rimarrà in ascolto
const port = 3000;

// impostazione dello strumento per recuperare gli assett statici prima della definizione delle rotte
app.use(express.static('public'));

// definisco la rotta base della mia app
app.get("/", (req, res) => {
    console.log("Server del mio blog")
});

app.get("/bacheca", (req, res) =>{
    const bacheca = [
        {
            id: 1,
            titolo: "Ciambellone",
            contenuto: "Ciambellone appena sfornato",
            immagine: "/images/ciambellone.jpeg",
            tags: ["dolce", "secco", "con il buco al centro"]
        },
        {
            id: 2,
            titolo: "Crackers",
            contenuto: "Crackers impastati con barbabietole",
            immagine: "/images/crackers_barbabietola.jpeg",
            tags: ["salato", "barbabietola", "rosso"]
        },
        {
            id: 3,
            titolo: "Pane fritto",
            contenuto: "Pane fatto in casa successivamente fritto",
            immagine: "/images/pane_fritto.jpeg",
            tags: ["dolce", "pane", "fritto"]
        },
        {
            id: 4,
            titolo: "Pasta alla barbabietola",
            contenuto: "Pasta fatta in casa usando la barbabietola",
            immagine: "/images/pasta_barbabietola.jpeg",
            tags: ["salato", "barbabietola", "rosso"]
        },
        {
            id: 5,
            titolo: "Torta paesana",
            contenuto: "Torta paesana fatta in casa",
            immagine: "/images/torta_paesana.jpeg",
            tags: ["dolce", "barbabietola", "rosso"]
        },
    ]

    res.json(bacheca);
})

// inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () =>{
    console.log(`Server del nostro blog in ascolto alla porta  ${port}`)
});