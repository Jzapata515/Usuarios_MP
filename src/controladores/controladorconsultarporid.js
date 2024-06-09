const dao = require("../dao/consultar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador consultar por id");
        console.log("req: " + req);

        var  resultadoConsultar = await dao.consultarPorID(req.params.id);
        if(!resultadoConsultar){
            res.status(404).send({ estado: "ok", mensaje: "No se encontraron usuarios con los datos proporcionados"});
            return;
        }
        res.status(200).send({ estado: "ok", mensaje: "Los datos de los usuarios se han recuperado correctamente", datos: resultadoConsultar});
        return;
    }
    catch(error){
        console.error("Ocurrió un error al consultar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al recuperar los datos", error: error});
        return;
    }
};