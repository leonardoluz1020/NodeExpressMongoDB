import mongoose from 'mongoose'; // impotando o pacote mongoose para o projeto
import dotenv from 'dotenv';
dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
// craindo a conexão com o banco de dados
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterleoluz.zoaawnu.mongodb.net/alura-node?`);

// criando variavel para armazenar a conexão
let db = mongoose.connection;

// exportando a variavel para usar no projeto
export default db;
