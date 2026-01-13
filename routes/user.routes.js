const express = require("express");

const { body, validationResult } = require("express-validator");

const router = express.Router();
const userController = require("../controllers/user.controllers");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post(
  "/create",
  [
    body("nombre")
      .trim()
      .escape()
      .matches(/^[a-zA-Z\s]+$/)
      .notEmpty()
      .isString()
      .withMessage("Nombre obligatorio"),
    body("apellido")
      .trim()
      .escape()
      .matches(/^[a-zA-Z\s]+$/)
      .notEmpty()
      .isString()
      .withMessage("Apellido obligatorio"),
    body("edad")
      .escape()
      .isInt({ min: 18 })
      .withMessage("Edad debe ser un numero valido"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
  userController.createUser
);

module.exports = router;
