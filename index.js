const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/KeepersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("Oh no! Mongo connection error");
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(9000, (req, res) => {
  console.log("Listening on port 9000");
});
