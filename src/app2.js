import express from 'express'

const app = express();

app.use(express.json())

const livros = [{id:0, "titulo": "nomedotitulo"}]

app.get('/',(req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/livros',(req, res) => {
    res.status(200).json(livros)
})

app.post('/livros',(req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso')
})

