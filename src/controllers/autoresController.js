import autores from "../models/Autor.js";

class AutorController {
    // Create - Criar cadastro de autores
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar Autor.` });
            } else {
                res.status(201).send({autor:`Autor criado com sucesso!.`})
                
            }
        })
    }
    // Read - Leitura de autores
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }
    static listarAutorPornome = (req, res) => {
        const nome = req.query.nome
        autores.find({ 'nome': nome }, {}, (err, autores) => {
            if (!err) {
                res.status(200).send(autores)
            } else {
                res.status(400).send(`Erro na busca por nome de autor`)
            }
        })
    }
    static listarAutorPorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id do Autor não localizado.` })
            } else {
                res.status(200).send(autores);
            }
        })

    }
    // Upadate - atulizar autores
    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor atualizado com sucesso' });
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
    // Delete - deletar autores
    static excluirAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
}

export default AutorController;
