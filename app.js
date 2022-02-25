const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
