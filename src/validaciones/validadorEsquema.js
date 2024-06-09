let validador = require('jsonschema').Validator;
let v = new validador();
var fs = require('fs');

module.exports = {
    validar: async(data, esquema) => {
        console.log('datos: ', data);
        console.log('esquema: ', esquema);
        let detalles = [];
        let respuesta = {};
        try {
            let esquemaValidacion = await v.validate(data, esquema);
            if (esquemaValidacion.valid) {
                console.log("Validar Esquema " + esquema.id + " ok");
                respuesta.valido =  true
                return Promise.resolve(respuesta);
            } else {
                console.warn("Esquema inválido");
                respuesta.valido = false;
                for (let item of esquemaValidacion.errors) {
                    console.warn(JSON.stringify(item));
                    detalles.push(item.stack);
                }
                respuesta.detalles = detalles;
                return Promise.resolve(respuesta);
            }

        } catch (error) {
            console.error("Error al validar esquema: ", error);
            respuesta.valido = false;
            respuesta.detalles = "Template del esquema no existe"
            return Promise.resolve(respuesta);
        }
    }
}
