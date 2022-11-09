let mysql = require('mysql');

let settings = require('./confing.json');
let connection;

function connectDatabase() {

    if (!connection) {

        connection = mysql.createConnection(settings);

        connection.connect(function (err) {

            if (!err) {

                console.log('Base de Datos Conectada: ' + settings.database);

            } else {

                console.log('Error en la conexión con la Base de Datos');

            }

        });

    }

    return connection;

}

module.exports = connectDatabase();

//exporta la conexión

module.exports = connectDatabase();