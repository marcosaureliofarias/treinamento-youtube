const http = require("http");
const port = 3000;

const rotas = {
  "/": "API-Nodejs",
  "/livros": "Pagina de livros",
  "/autores": "pagina de autores",
  "/animes": "Pagina de animes",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plan" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
