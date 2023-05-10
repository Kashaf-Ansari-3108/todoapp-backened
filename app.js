const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI = "mongodb+srv://admin:admin3108@cluster0.zbhlrew.mongodb.net/TodoApp";

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api",router);



app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
