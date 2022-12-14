import express from "express";

const app = express();

const port = process.env.PORT || 5050;

app.get("/home", (req, res) => {
    res.send('working....')
})

app.listen(port, () => {
    console.log("server is raning on the port is 5050");
})

