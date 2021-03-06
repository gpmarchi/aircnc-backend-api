const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const port = process.env.PORT;

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-xxuxt.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use("/file", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(port, () => {
  console.log("Server running on port", port);
});
