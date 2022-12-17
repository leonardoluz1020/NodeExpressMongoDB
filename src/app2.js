import express from 'express';

const app = express();
app.use(express.json());

const series = [
    { id: 1, "titulo": "the witcher" },
    { id: 2, "titulo": "Supernatural" },
    { id: 3, "titulo": "Game of thrones" }

];

// rota method get '/' acessando tela inicial do recurso
app.get('/', (req, res) => {
    res.status(200).send('Welcome to world series');
})
// rota method get '/series acessando tela de series do recurso
app.get('/series', (req, res) => {
    res.status(200).json(series);
})
// rota method get '/series/:id acessando tela com a serie escolhida no recurso
app.get('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    res.json(series[index]);
})
// rota method post '/series craindo nova serie 
app.post('/series', (req, res) => {
    series.push(req.body);
    res.send('Serie incluida com sucesso!.');
})
// rota method put '/series/:id modificando serie 
app.put('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    series[index].titulo = req.body.titulo;
    res.send('Serie alterada com sucesso!.');
})
// rota method delete '/series/:id excluindo serie selecionada
app.delete('/series/:id', (req, res) => {
    let index = buscarSerie(req.params.id);
    series.splice(index, 1);
    res.send('Serie excluida com sucesso!.');
})

function buscarSerie(id) {
    return series.findIndex(serie => serie.id == id);
}

export default app;