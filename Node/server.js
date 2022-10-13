// 
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json( {message: "Hello World"});
})

app.listen(3333, () => console.log("Server running in localhost:3333"));