"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// mongoose.connect("mongodb+srv://AndreMatioski:gremio123@projetoapirestfull.fmleoz7.mongodb.net/APIRestFull");
mongoose_1.default.connect("mongodb+srv://vitorMatioski:santos98M10122021@matheus-controle-aulas.gpolfz6.mongodb.net/Matheus-controle-aulas");
let db = mongoose_1.default.connection;
exports.default = db;
