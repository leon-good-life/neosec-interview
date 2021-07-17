const express = require("express");
const data = require("./data-set.json");
const app = express();
const port = 3001;

app.use("/", express.static("../frontend/build"));

app.get("/rest/calls", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`The REST API is listening at http://localhost:${port}`);
});
