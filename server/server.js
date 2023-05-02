const express = require("express");

const app = express();

app.get("/api/files/data", require("./services/processFiles"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

module.exports = app;
