// 
import express from "express";
import { router } from "./src/routes/routes";

const app = express();
app.use(router);

app.listen(3333, () => console.log("Server running in localhost:3333")); 