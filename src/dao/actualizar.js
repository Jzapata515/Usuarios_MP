const modelo = require("../modelos/modelousuario");
require("./conexion");

exports.ejecutar = async (id, datos) => {
    try{
        console.log("DAO actualizar");
        console.log("id: " + id);
        console.log("datos: " + JSON.stringify(datos));

        var resultado = await modelo.updateOne({_id: id}, {$set: {nombre: datos.nombre, apellido: datos.apellido, correo: datos.correo, password: datos.password}});

        return resultado;
    }
    catch(error){
        console.error("daoActualizar:Ocurrió un error al actualizar los datos: "+ error);
        return null;
    }
};