const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../build/static")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Tudo funcionando corretamente");
});
