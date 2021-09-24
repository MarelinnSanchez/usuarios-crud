const express = require("express");
const router = require("./routes/router");
const app = express();

app.use(express.json());

//router manejador de rutas

router(app);
// enpdpoint punto de salida
/**
 * GET traer informacion
 * POST AGREGAR
 * PUT ACTUALIZAR
 * DELETE
 */

// funtion mantiene un alcance interno se puede usar this
//funcion flecha no se usa this
app.get("/", (req, res) => {
  //req- todo lo que me mandan
  //res- todo lo que yo mando
  res.send("Bienvenido");
});

// Para que el servidor se encienda
app.listen(4002, () => {
  console.log("Estoy activo");
});
