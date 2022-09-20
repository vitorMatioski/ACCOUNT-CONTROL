import mongoose from "mongoose";

const aulasSchema = new mongoose.Schema(
  {
    id:         {type: String},
    nome:       {type: String, required: true},
    dataAula:        {type: String, required: true},
    valorAula:  {type: String, required: true},
    descricao:      {type: String, required: true},
  }
);

const aulas= mongoose.model('aulas', aulasSchema);

export default aulas;