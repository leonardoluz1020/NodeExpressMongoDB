import express from "express";// importando o express para usar o app.get
import db from "./config/dbConnect.js";// importando a conexão para o app
import routes from "./routes/index.js";

// acessando as conexão do projeto passando o db.on para mostrar se algo ocorrer errado
db.on("error", console.log.bind(console, 'Erro de conexão'))
//pedindo para que acesse uma vez e informar se acaso for sucesso
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
// Usamos o express.json para indicar que vamos usar no post e put o formato json 
app.use(express.json())
// Chamando o routes passando o app
routes(app);

export default app; // exportando a const app 