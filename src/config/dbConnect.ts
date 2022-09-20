import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://AndreMatioski:gremio123@projetoapirestfull.fmleoz7.mongodb.net/APIRestFull");
mongoose.connect("mongodb+srv://vitorMatioski:santos98M10122021@matheus-controle-aulas.gpolfz6.mongodb.net/Matheus-controle-aulas");

let db = mongoose.connection;

export default db;