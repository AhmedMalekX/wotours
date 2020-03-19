const express = require("express");

const app = express();

const port = 3000;
const host = "127.0.0.1";

app.listen(port, (req, res) => {
  res.send(`App running at ${host}:${port}`);
});
