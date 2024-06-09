const daoGuardar = require("../dao/guardar");
const daoConsultar = require("../dao/consultar");
const validarEsquema = require('../validaciones/validadorEsquema')
const fs = require('fs');

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador guardar");
        console.log("req: " + req);

        const esquema = JSON.parse(fs.readFileSync('./src/recursos/esquemausuarios.json')).registro;
        const respuestaValidadorEsquema = await validarEsquema.validar(req.body, esquema);
        if (!respuestaValidadorEsquema.valido){
            res.status(400).send({ estado: "error", mensaje: "Datos inválidos", error: respuestaValidadorEsquema.detalles});
            return;
        }

        var resultadoConsultar = await daoConsultar.consultar({ nombre: req.body.nombre, apellido: req.body.apellido})
        console.log("resultadoConsultar: "  + JSON.stringify(resultadoConsultar));
        if (resultadoConsultar.length > 0){
            res.status(400).send({ estado: "error", mensaje: "Ya existe un usuario con los datos propocionados", error: ""});
            return;
        }

        const  resultadoGuardar = await daoGuardar.ejecutar(req.body);
        res.status(201).send({ estado: "ok", mensaje: "Los datos se han guardardo correctamente", id: resultadoGuardar._id});
        return;
    }
    catch(error){
        console.error("Ocurrió un error al guardar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al guardar los datos", error: error});
        return;
    }
};