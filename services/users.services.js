let users = [
  { id: 1, nombre: "Pablo" },
  { id: 2, nombre: "Juan" },
];

const db = require("../config/db");

exports.getUsers = async () => {
  const [rows] = await db.query("SELECT * FROM usuario");
  return rows;
};
exports.getUser = async (id) => {
  const [rows] = await db.query("SELECT * FROM usuario WHERE id=?", [id]);

  return rows[0] || null;
};
exports.createUser = async (nombre, apellido, edad) => {
  const [insert] = await db.query(
    "INSERT INTO usuario(nombre,apellido,edad) VALUES(?,?,?)",
    [nombre, apellido, edad]
  );

  return {
    id: insert.insertId,
    nombre,
    apellido,
    edad,
  };
};
