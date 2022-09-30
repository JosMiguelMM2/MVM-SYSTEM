let  express = require('express');//guarda express que nosotros intalamos

let  bodyParser = require('body-parser'), port = 4000;//rmanejo de cuerpo de la "pagina" y puerto

let  http = require('http');//protocolo de intercambio de archivos

let  path = require('path');//direccion

let  conectado = require('./src/conexion/index');
//const { getTipEmpleado } = require('./src/modelos/tipEmpleadoModel');

let  tipContac= require('./src/rutas/tipContacRutas');
let  tipEmpleado= require('./src/rutas/tipEmpleadoRuta');
let  tipJuguete= require('./src/rutas/tipJuguetesRutas'); 
let  tipMaterial= require('./src/rutas/tipMaterialesRuta');
let  tipProducjuguete= require('./src/rutas/tipProducJuguetesRuta')
let  app = express();//recibe un constructor

// todos los entornos

app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso

app.use(bodyParser.json({type: 'application/json', limit: '10mb'}));//recibe un cuerpo y un objeto json

app.use(bodyParser.urlencoded({extended: false}));//recibe url codificada

app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//================================================================

app.use(function (req, res, next)

{

// Stio web al que desea permitir que se conecte

res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

// A que métodos que desea dar permisos

res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DElet E');

// A que encabezados se les va a dar permiso

res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas

//a la API (por ejemplo, en caso de que use sesiones)

res.setHeader('Access-Control-Allow-Credentials', true);

// Pase a la siguiente capa de middleware

next();

});

//============================================================

//app.use('/tipdoc', tipdoc());//ruta para el servicio
app.use('/tipContac', tipContac());
app.use('/tipEmpleado', tipEmpleado());
app.use('/tipJuguete', tipJuguete());
app.use('/tipMaterial', tipMaterial());
app.use('/tipProducjuguete', tipProducjuguete());

http.createServer(app).listen(app.get('port'), function ( )

{

console.log('Servidor Express escuchando por el puerto ' + app.get('port'));

});

module.exports = app;