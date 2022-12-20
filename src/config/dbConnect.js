import mongoose from 'mongoose'; // impotando o pacote mongoose para o projeto

// craindo a conexão com o banco de dados
mongoose.connect("mongodb+srv://LeoAlura:Leo123@clusterleoluz.zoaawnu.mongodb.net/alura-node?");

// criando variavel para armazenar a conexão
let db = mongoose.connection;

// exportando a variavel para usar no projeto
export default db;
