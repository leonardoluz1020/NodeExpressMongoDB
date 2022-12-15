import http from 'http' // importando o modulo http que já vem no node
const port = 3000; // criando uma const port para colocarmos o endereço da  porta que será usada para um servidor local
// criando o servidor e definir o que ele vai escutar e como vai acontecer essa comunicação 

// Criando objeto para passar as rotas na url
const rotas = {
    '/':'Curso de node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'}); // resposta de cabeçalho com statusCode 200 e tipo de conteudo (Content-type) no caso enviadmos  texto (text/plain)
    res.end(rotas[req.url]);// finalizando resposta mandando o texto que será enviado ou passando as rotas do objeto
})
// definindo a porta que o servidor vai escutar do link que foi criado
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)// console.log para mostrar no terminal que está execuntando a porta 
})
