const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "../logs");
const logFile = path.join(logsDir, "access.log");

module.exports = (req, res, next) => {
  const methodsToLog = ["POST", "PUT", "DELETE"];

  if (!methodsToLog.includes(req.method)) {
    return next();
  }

  // Crear carpeta logs si no existe
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${ip} ${req.method} ${req.originalUrl}\n`;

  // appendFile CREA el archivo si no existe
  fs.appendFile(logFile, log, (err) => {
    if (err) {
      console.error("Error escribiendo log:", err);
    }
  });

  next();
};
