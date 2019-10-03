const express = require("express");

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
