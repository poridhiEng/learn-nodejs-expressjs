const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let mytodo = {
  id: 1,
  title: "title no 1",
};

app.get("/", function (req, res) {
  res.json(mytodo);
});

app.post("/", function (req, res) {
  const body = req.body;
  body.id = 101;
  res.json(body);
});

app.put("/", function (req, res) {
  const body = req.body;
  const newTitle = body.title;

  mytodo.title = newTitle;
  res.json(mytodo);
});

app.listen(4000);
