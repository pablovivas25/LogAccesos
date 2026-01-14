const express = require("express");
const app = express();
require("dotenv").config();

const routes = require("./routes/index");

const helmet = require("helmet");
const cors = require("cors");

const loggerMiddleware = require("./middlewares/logger.middleware");

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowebHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet()); //agrega niveles de seguridad
app.use(loggerMiddleware); //guardado del archivo log
app.use(express.json()); // necesarios para obtener los datos a traves de las cabeceras
app.use(routes);

module.exports = app;
