const userService = require("../services/users.services");
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getUser(id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const { nombre, apellido, edad } = req.body;
    const userCreate = await userService.createUser(nombre, apellido, edad);

    res.status(201).json(userCreate);
  } catch (error) {
    next(error);
  }
};
