const express = require("express");
const app = express();

app.get("/hello", function(req, res){
  res.status(200).json({ message: "Teste com Mocha.js"})
})

app.listen(3000);

module.exports = app;