require("dotenv").config();

const PORT = process.env.PORT;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(PORT, console.log(`App is listening on ${PORT}`));

console.log("balls");
