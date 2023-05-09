const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/json", function (req, res) {
  res.json({
    source: "server",
    message: "hello",
  });
});

app.get("/html", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

app.listen(4000);
