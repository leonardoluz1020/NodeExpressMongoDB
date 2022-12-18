import express from 'express';

const app = express();
app.use(express.json());

const series = [{
    id: 1,
    "titulo": "The Witcher",
    "autor": "Andrzej Sapkowski",
    "lancamento": "2019-12-20"
}, {
    id: 2,
    "titulo": "Supernatural",
    "autor": "Eric Kripke",
    "lancamento": "2005-07-13"
}, {
    id: 3,
    "titulo": "The walking Dead",
    "autor": "Robert Kirkman",
    "lancamento": "2010-10-31"
}, {
    id: 4,
    "titulo": "1899",
    "autor": " Baran bo Odar, Jantje Friese",
    "lancamento": "2022-11-17"
},]

app.get('/', (req, res) => {
    res.status(200).send('Welcome to series');
})

app.get('/series', (req, res) => {
    res.status(200).json(series);
})

app.get('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    res.status(200).json(series[index]);
})

app.post('/series', (req, res) => {
    series.push(req.body);
    res.status(201).send('Serie incluida com sucesso!.');
})

app.put('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    series[index].id = req.body.id;
    series[index].titulo = req.body.titulo;
    series[index].autor = req.body.autor;
    series[index].lancamento = req.body.lancamento;
    res.send('Titulo modificado com sucesso!.');
})

app.delete('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    series.splice(index, 1);
    res.send('Titulo excluido com sucesso!.');
})

function buscarSerie(id) {
    return series.findIndex(serie => serie.id == id);
}

export default app;
