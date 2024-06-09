const express = require("express");
var cors = require('cors')

const rutas = require("./rutas");

const app = express();

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
     next();
});
app.use('/', rutas);

app.listen("4000", () => {
    console.log("App Gestión de Usuarios corriendo en el puerto: 4000");
})