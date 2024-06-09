const daoActualizar = require("../dao/actualizar");
const validarEsquema = require('../validaciones/validadorEsquema');
const daoConsultar = require("../dao/consultar");
const fs = require('fs');

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador actualizar");
        console.log("req: " + req);
        const esquema = JSON.parse(fs.readFileSync('./src/recursos/esquemausuarios.json')).actualizacion;
        const respuestaValidadorEsquema = await validarEsquema.validar(req.body, esquema);
        if (!respuestaValidadorEsquema.valido){
            res.status(400).send({ estado: "error", mensaje: "Datos inválidos", error: respuestaValidadorEsquema.detalles});
            return;
        }

        var  resultadoConsultar = await daoConsultar.consultarPorID(req.params.id);
        if(!resultadoConsultar){
            res.status(404).send({ estado: "ok", mensaje: "No se encontraron usuarios con los datos proporcionados"});
            return;
        }

        await daoActualizar.ejecutar(req.params.id, req.body);
        console.log("daoActualizar" +  JSON.stringify(daoActualizar))
        res.status(200).send({ estado: "ok", mensaje: "Los datos del usuario se han actualizado correctamente"});
        return;
    }
    catch(error){
        console.error("Ocurrió un error al actualizar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al actualizar los datos", error: error});
        return;
    }
};