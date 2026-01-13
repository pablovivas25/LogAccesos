const express = require("express");
const app = express();
require("dotenv").config();

const routes = require("./routes/index");

const helmet = require("helmet");

const loggerMiddleware = require("./middlewares/logger.middleware");

app.use(helmet());
app.use(loggerMiddleware);
app.use(express.json());
app.use(routes);

module.exports = app;
