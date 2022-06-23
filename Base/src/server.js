const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const Port = process.env.PORT || 8000;

app.listen(Port, () => console.log(`Server is Running on PORT:${Port}`));
