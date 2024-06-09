const express = require('express');
const controladorGuardar  = require('../controladores/controladorguardar');
const controladorConsultar  = require('../controladores/controladorconsultar');
const controladorConsultarPorId  = require('../controladores/controladorconsultarporid');
const controladorActualizar  = require('../controladores/controladoractualizar');
const controladorEliminar  = require('../controladores/controladoreliminar');
const router = express.Router();

router.post('/usuarios', controladorGuardar.ejecutar);
router.get('/usuarios', controladorConsultar.ejecutar);
router.get('/usuarios/:id', controladorConsultarPorId.ejecutar);
router.put('/usuarios/:id', controladorActualizar.ejecutar);
router.delete('/usuarios/:id', controladorEliminar.ejecutar);


module.exports = router;