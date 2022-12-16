import express  from "express";// importando o express para usar o app.get

const app = express();

// Usamos o express.json para indicar que vamos usar no post e put o formato json 
app.use(express.json())

// Criando uma array de objetos com titulos e nome dos filmes
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis" },
    {id: 2, "titulo": "O hobbit"},
    {id: 3, "titulo": "star trek"},
    {id: 4, "titulo": "passageiros"},
]

// criando uma rota usando o metodo get status 200 passando Curso de Node
app.get('/',(req, res) => {
    res.status(200).send('Curso de Node');
})
// craindo uma rota usando metodo get status 200 passando a array de livros em formato json
app.get('/livros',(req, res) => {
    res.status(200).json(livros)
})
// craindo uma rota metodo post para cadastrar ou criar novos objetos
app.post('/livros',(req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})
export default app; // exportando a const app 