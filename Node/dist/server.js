"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var todos = [];
var app = (0, express_1.default)();
app.use(express_1.default.json());
// /*
//     CRUD
//     C   -   CREATE  -   CRIAR
//     R   -   READ    -   LER
//     U   -   UPDATE  -   ATUALIZAR
//     D   -   DELETE  -   DELETAR
// */
app.get("/todos", function (req, res) {
    //busca todos
    res.status(200).json({ todos: todos });
});
app.post("/todos", function (req, res) {
    var body = req.body;
    var title = body.title, description = body.description;
    var todo = {
        title: title,
        description: description,
        concluded: false,
        id: (0, uuid_1.v4)(),
        date: new Date().toString()
    };
    todos.push(todo);
    res.status(201).send(todo);
});
app.put("/todos", function (req, res) {
    var id = req.headers.id;
    var query = req.query;
    var todo = todos.find(function (todo) { return todo.id == id; });
    if (todo) {
        for (var key in query) {
            if (key == "concluded") {
                todo.concluded = !!query[key];
                return;
            }
            todo[key] = query[key];
        }
    }
    res.status(202).send(todo);
});
app.delete("/todos", function (req, res) {
    var id = req.headers.id;
    var index = todos.findIndex(function (todo) { return todo.id == id; });
    todos.splice(index, 1);
    res.status(202).send();
});
app.listen(3333, function () { return console.log("Server running in localhost:3333"); });
