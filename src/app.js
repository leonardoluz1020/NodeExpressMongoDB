import express from "express";// importando o express para usar o app.get
import db from "./config/dbConnect.js";// importando a conexão para o app

// acessando as conexão do projeto passando o db.on para mostrar se algo ocorrer errado
db.on("error", console.log.bind(console, 'Erro de conexão'))
//pedindo para que acesse uma vez e informar se acaso for sucesso
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})


const app = express();

// Usamos o express.json para indicar que vamos usar no post e put o formato json 
app.use(express.json())

// Criando uma array de objetos com titulos e nome dos filmes
const livros = [
    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "O hobbit" },
    { id: 3, "titulo": "star trek" },
    { id: 4, "titulo": "passageiros" },
]
// criando uma rota usando o metodo get status 200 passando Curso de Node
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})
// craindo uma rota usando metodo get status 200 passando a array de livros em formato json
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})
// criando rota usando o metodo get status 200 passando um objeto pelo id em formato json
app.get('/livros/:id', (req, res) => {
    let index = buscarLivros(req.params.id);
    res.status(200).json(livros[index]);
})
// craindo uma rota metodo post para cadastrar ou criar novos objetos
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})
// Modificando um objeto pelo seu id usando o metodo put
app.put('/livros/:id', (req, res) => {
    let index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})
// Excluindo um objeto pelo seu id usando o metodo Delete
app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = buscarLivros(id)
    livros.splice(index, 1)
    res.send('Livro excluido com sucesso!.')
})
// função para buscar indice da array de objetos usando o metodo findIndex
function buscarLivros(id) {
    return livros.findIndex(livro => livro.id == id);// [{id:0},{id:1},{id:2}]
}



export default app; // exportando a const app 