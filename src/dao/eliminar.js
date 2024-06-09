const modelo = require("../modelos/modelousuario");
require("./conexion");

exports.ejecutar = async (id) => {
    try{
        console.log("DAO eliminar por id");
        console.log("id: " + id);

        var resultado = await modelo.deleteOne({_id: id});

        return resultado;
    }
    catch(error){
        console.error("daoeliminar:Ocurrió un error al eliminar los datos: "+ error);
        return null;
    }
};