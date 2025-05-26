const express = require("express");
const router = express.Router();
const Asignaturacontroller = require("../controllers/Asignaturacontroller.js");

router.get("/",Asignaturacontroller.consultar);
router.post("/",Asignaturacontrollercontroller.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;