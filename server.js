import app from "./src/app.js"; // importando app.js

const port = process.env.PORT || 3000; // Criando uma porta passando process.env.PORT ou 3000

// Utilizaando o app.listen para escutar a porta 
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)// console.log para mostrar no terminal que está execuntando a porta 
})
 
