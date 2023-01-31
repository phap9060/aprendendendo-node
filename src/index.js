const express = require("express");
const { uuid } = require("uuidv4");

const app = express();
app.use(express.json());

const projects = ["projeto 1"];

app.get("/projects", (request, send) => {
  send.json(projects);
});

app.put("/projects/:id", (request, send) => {
  const { id } = request.params;
  console.log(id);
  send.json(["projeto1", "projeto2"]);
});
app.delete("/projects/:id", (request, send) => {
  send.json({
    message: "Olá Pedro",
  });
});

app.listen(3000, () => {
  console.log("Server Start");
});
