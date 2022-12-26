import livros from "../models/Livro.js";

class LivroController {
    // Create - criar dados
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send('Livro cadastrado com sucesso!.');
            }
        })
    }
    // read - leitura de dados
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            //.populate('editora')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }
    static listarLivroPorId = (req, res) => {
        const id = req.params.id
        livros.findById(id)
            .populate('autor')
            .exec((err, livros) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - id do livro não localizado.` })
                } else {
                    res.status(200).send(livros);
                }
            })
    }
    static listarLivroPorEditora = (req, res) => {

        const editora = req.query.editora
        livros.find({ 'editora': editora })
        .populate('autor','nome')

        .exec({}, (err, livros) => {
            if (!err) {
                res.status(200).send(livros);
            } else {
                res.send('Não foi possivel encontrar a editora!.')
            }
        })
    }
    // Update - atualização de dados
    static atualizarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err, livros) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' });
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
    // Delete - deletar dados
    static excluirLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }    
}

export default LivroController;