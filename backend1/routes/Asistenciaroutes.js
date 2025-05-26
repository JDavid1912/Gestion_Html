const express = require("express");
const router = express.Router();
const asistenciascontroller = require("../controllers/asistenciascontroller.js");

router.get("/",asistenciascontroller.consultar);
router.post("/",asistenciascontroller.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;