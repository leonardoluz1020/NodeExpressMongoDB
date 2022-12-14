import http from 'http' // importando o modulo http que já vem no node
const port = 3000; // criando uma const port para colocarmos o endereço da  porta que será usada para um servidor local

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Curso de Node');
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
