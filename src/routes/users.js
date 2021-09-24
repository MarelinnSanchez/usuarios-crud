const { Router } = require("express");

//API conexion entre aplicacion y la base de datos
let currenId = 0;
let usersLista = [];

function usersApi(app) {
  const router = Router();
  app.use("/user", router);

  //CRUD
  //APIs Json
  //tarer todos los usuarios
  router.get("/todos", (req, res) => {
    res.json({ users: usersLista });
  });
  //crear usuario
  router.post("/crear", (req, res) => {
    const { body: userInfo } = req;
    const newId = currenId++;
    const nuevoUsuario = { _id: newId, ...userInfo };
    usersLista.push(nuevoUsuario);
    res.json({ message: "Usuario Nuevo" });
  });
  //traer usuario
  router.get("/traer-uno/:_id", (req, res) => {
    const { _id } = req.params;
    const user = usersLista.find((user) => String(user._id) === _id);
    res.json(user);
  });
  //eliminar usuario
  router.delete("/eliminar/:_id", (req, res) => {
    const { _id } = req.params;
    const newuser = usersLista.filter((user) => String(user._id) !== _id);
    usersLista = newuser;
    res.json({ message: "Usuario eliminado" });
  });
  //actualizar un usuario
  router.put("/actualizar/:_id", (req, res) => {
    const { _id } = req.params;
    const { body: newDato } = req;
    const userIndex = usersLista.findIndex((user) => String(user._id) === _id);
    // usersLista[user]
    // [] => {}
    usersLista[userIndex] = { ...usersLista[userIndex], ...newDato };
    res.json(usersLista[userIndex]);
  });
}

module.exports = usersApi;
