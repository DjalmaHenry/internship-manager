const express = require("express");

const { resolve } = require("path");

const app = express();

app.use(express.static(resolve.join(__dirname, "../build/static")));

app.get("*", (req, res) => {
  res.sendFile(resolve.join(__dirname, "./public/index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Tudo funcionando corretamente");
});
