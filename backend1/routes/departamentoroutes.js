const express = require("express");
const router = express.Router();
const departamentoccontroller = require("../controllers/departamentocontroller.js");

router.get("/",departamentocontroller.consultar);
router.post("/",departamentocontrollercontroller.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;