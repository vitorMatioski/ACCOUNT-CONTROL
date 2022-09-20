import aulas from "../models/Aulas.js";

class AulaController {
    static showAulas = (req, res) => {
        aulas.find((err, aulas) => {
            res.status(200).json(aulas);
        });
    }

    static showAulaById = (req, res) => {
        const id = req.params.id;

        aulas.findById(id, (err, aulas) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Aula not found!`});
            } else {
                res.status(200).send(aulas);
            }
        });
    }

    static addAula = (req, res) => {
        let aula = new aulas(req.body);

        aula.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Something went wrong, the Aula has not been added!`});
            } else {
                res.status(201).send(aula.toJSON());
            }
        });
    }

    static updateAula = (req, res) => {
        const id = req.params.id;

        aulas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Aula updated successfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static deleteAula = (req, res) => {
        const id = req.params.id;

        aulas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Aula deleted sucessfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default AulaController;