//
import { deleteTodo, getTodo, postTodo, putTodo } from "../controllers/todos";
import { Router } from "express";
import express from 'express';

/*
    CRUD
    C   -   CREATE  -   CRIAR
    R   -   READ    -   LER
    U   -   UPDATE  -   ATUALIZAR
    D   -   DELETE  -   DELETAR
*/

const router = Router();

router.use(express.json());

router.get("/todos", getTodo);
router.post("/todos", postTodo);
router.put("/todos", putTodo);
router.delete("/todos", deleteTodo);

export { router };