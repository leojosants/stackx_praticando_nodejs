// 
import { Request, Response } from "express";
import { posTodoDTO } from "../interfaces/DTO/postTodoDTO";
import { ITodos } from "../interfaces/ITodos";
import { v4 as uuidv4 } from "uuid";

var todos: ITodos[] = [];

export async function getTodo(req: Request, res: Response) {
    res.status(200).json({ todos });
};

export async function postTodo(req: Request, res: Response) {
    const body : posTodoDTO  = req.body;
    const { description, title } = body;
    const todo : ITodos = {
        description,
        title,
        concluded: false,
        id : uuidv4(),
        date : new Date().toString()
    };

    todos.push(todo);
    res.status(201).send(todo);
}

export async function putTodo(req: Request, res: Response) {
    const { id } = req.headers;   
    let { query } = req;
    const todo = todos.find(todo => todo.id == id);
    
    if(todo) {
        for(let key in query) {
            if(key == "concluded") {
                todo.concluded = !!query[key];
                return;
            }

            todo[key] = query[key];
        }
    }

    res.status(202).send(todo);
}

export async function deleteTodo(req: Request, res: Response) {
    const { id } = req.headers;
    const index = todos.findIndex(todo => todo.id == id);

    todos.splice(index, 1);
    res.status(202).send();
}