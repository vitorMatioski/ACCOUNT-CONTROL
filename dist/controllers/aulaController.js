"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aulas_js_1 = __importDefault(require("../models/Aulas.js"));
class AulaController {
}
AulaController.showAulas = (req, res) => {
    Aulas_js_1.default.find((err, aulas) => {
        res.status(200).json(aulas);
    });
};
AulaController.showAulaById = (req, res) => {
    const id = req.params.id;
    Aulas_js_1.default.findById(id, (err, aulas) => {
        if (err) {
            res.status(404).send({ message: `${err.message} - Aula not found!` });
        }
        else {
            res.status(200).send(aulas);
        }
    });
};
AulaController.addAula = (req, res) => {
    let aula = new Aulas_js_1.default(req.body);
    aula.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - Something went wrong, the Aula has not been added!` });
        }
        else {
            res.status(201).send(aula.toJSON());
        }
    });
};
AulaController.updateAula = (req, res) => {
    const id = req.params.id;
    Aulas_js_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: "Aula updated successfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
AulaController.deleteAula = (req, res) => {
    const id = req.params.id;
    Aulas_js_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: "Aula deleted sucessfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
exports.default = AulaController;
