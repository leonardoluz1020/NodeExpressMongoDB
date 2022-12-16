import express from 'express'

const app = express();
app.use(express.json())

const livros = [
    { id: 0, "titulo": "Eu sou a lenda" },
    { id: 1, "titulo": "Passageiros" },
    { id: 2, "titulo": "Wednesday"},
]

app.get('/',(req, res) => {
    res.status(200).send('Curso de Node ALURA')
})

app.get('/livros',(req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id',(req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    res.status(200).json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!.')
})

app.put('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros[index].titulo = req.body.titulo
    res.send('Titulo modificado com sucesso!.')
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index,1);
    res.send('Livro excluido com sucesso');
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;