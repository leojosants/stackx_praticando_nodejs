
// Criando servidor HTTPS
import express from "express";
import fs from "fs";
import cors from "cors";
import https from "https";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(3000, () => console.log("api rodando..."));

https.createServer({
    cert: fs.readFileSync("C:/REPOSITORIO_GITHUB_DESKTOP/Praticando_NodeJs_STACKX/Node/certifacte.crt"),
    key: fs.readFileSync("C:/REPOSITORIO_GITHUB_DESKTOP/Praticando_NodeJs_STACKX/Node/key.key")
}, app)
    .listen(3001, () => console.log("rodando em https"));



/*
    // Criando servidor HTTP

    const http = require("http");

    const hostname = "localhost";

    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("Hello World!");
    });

    server.listen(3333, hostname, () => {
        console.log("server running in localhost:3333");
    });
*/

/*  
    // MANIPULANDO ARQUIVO
    const fs = require("fs");

    /*
        // criando arquivo
        fs.writeFileSync("C:/REPOSITORIO_GITHUB_DESKTOP/Praticando_NodeJs_STACKX/Node/ola.txt", "Olá, Mundo!");

        const verifyExistFile = fs.existsSync("C:/REPOSITORIO_GITHUB_DESKTOP/Praticando_NodeJs_STACKX/Node/ola.txt");

        // verificando se arquivo existe
        if(verifyExistFile) {
            console.log("Arquivo existe");
        } else {
            console.log("Arquivo não existe");
    }
    */

    /*
        // lendo um arquivo JSON
        const userlist = fs.readFileSync("C:/REPOSITORIO_GITHUB_DESKTOP/Praticando_NodeJs_STACKX/Node/users.json", { encoding: "utf-8" });
        console.log("Tipo: ", typeof userlist);

        const parse = JSON.parse(userlist);

        parse.map(user => console.log(user.name));
    */
// */