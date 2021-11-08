const express = require("express");
const app = express();
app.use(express.json());
console.log("port");
app.listen(2247, (req, res) => {
  console.log("listening on port 2247");
});
