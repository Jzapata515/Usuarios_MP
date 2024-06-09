const daoEliminar = require("../dao/eliminar");
const daoConsultar = require("../dao/consultar");

exports.ejecutar = async (req, res) => {

    try{
        console.log("Controlador consultar por id");
        console.log("req: " + req);

        var  resultadoConsultar = await daoConsultar.consultarPorID(req.params.id);
        if(!resultadoConsultar){
            res.status(404).send({ estado: "ok", mensaje: "No se encontraron usuarios con los datos proporcionados"});
            return;
        }

        await daoEliminar.ejecutar(req.params.id);
        res.status(200).send({ estado: "ok", mensaje: "El usuario se ha eliminado correctamente"});
        return;
    }
    catch(error){
        console.error("Ocurrió un error al eliminar los datos: " + error);
        res.status(500).send({ estado: "error", mensaje: "Ocurrió un error al eliminar el usuario", error: error});
        return;
    } 
};