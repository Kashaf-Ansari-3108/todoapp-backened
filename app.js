const express = require("express");
const router = require('./routes/routes');
const cors = require('cors');
const connectDb = require('./db/db');
require('dotenv').config({path:'./config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use(cors());
app.use("/api",router);



app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
