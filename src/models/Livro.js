import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: [true, "o Titulo é obrigatório"] },
        autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "o Autor é obrigatório"] },
        editora: { type: String, required: [true, "o Nome da Editora é obrigatório"] },
        numeroPaginas: { type: Number }
    }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;