const modelo = require("../modelos/modelousuario");
require("./conexion");

exports.ejecutar = async (datos) => {
    try{
        console.log("DAO guardar");
        console.log("datos: " + JSON.stringify(datos));
        const usuario = new modelo(datos);
        var resultado = await usuario.save();

        return resultado;
    }
    catch(error){
        console.error("daoGuardar: Ocurrió un error al guardar los datos: "+ error);
        return null;
    }
};