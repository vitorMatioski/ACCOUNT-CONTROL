"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const aulasSchema = new mongoose_1.default.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    dataAula: { type: String, required: true },
    valorAula: { type: String, required: true },
    descricao: { type: String, required: true },
});
const aulas = mongoose_1.default.model('aulas', aulasSchema);
exports.default = aulas;
