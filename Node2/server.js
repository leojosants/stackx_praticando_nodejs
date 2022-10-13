// 
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello World" });
});

app.listen(333, () => console.log("Server running is localhost:333"));