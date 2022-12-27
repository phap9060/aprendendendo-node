const express = require("express");

const app = express();

app.get("/projects", (request, send) => {
  send.json({
    message: "Olá Pedro",
  });
});
app.patch("/projects/:id", (request, send) => {
  send.json({
    message: "Olá Pedro",
  });
});
app.delete("/projects/:id", (request, send) => {
  send.json({
    message: "Olá Pedro",
  });
});

app.listen(3000, () => {
  console.log("Server Start");
});
