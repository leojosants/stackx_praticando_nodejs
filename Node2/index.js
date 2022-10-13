// 
const http = require("http");

const hostname = "localhost";

const server = http.createServer((request, responde) => {
    responde.statusCode = 200;
    responde.setHeader("Content-Type", "text/plain");
    response.end("Servidor rodando em localhost:3333, usuário: Leonardo");
});

server.listen(3333, hostname, () => {
    console.log("");
});