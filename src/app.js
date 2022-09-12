import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Senho dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("API-NODEJS");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
