const DAO = require("../dao/consultar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador consultar");
        console.log("req: " + req);

        var  resultadoGuardar = await DAO.consultar(req.query);
        if(resultadoGuardar.length === 0){
            res.status(404).send({ estado: "ok", mensaje: "No se encontraron usuarios con los datos proporcionados"});
            return;
        }
        res.status(200).send({ estado: "ok", mensaje: "Los datos se han recuperado correctamente", datos: resultadoGuardar});
        return;
    }
    catch(error){
        console.error("Ocurrió un error al actualizar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al recuperar los datos", error: error});
        return;
    }
};