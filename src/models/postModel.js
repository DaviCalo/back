import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONECT);

export async function getTodosPosts(){
    const db = conexao.db("imersao"); // Nome do banco de dados
    const colecao = db.collection("posts"); // Nome da coleção
    return colecao.find().toArray();
}