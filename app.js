const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const lineRouter = require("./routes/line");

dotenv.config();
const app = express();
app.use(cors()); // allow all origin

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// Line แนะนำ ให้วาง Route ก่อน express.json
app.use("/", indexRouter);
app.use("/line", lineRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
